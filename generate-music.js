// Synthesizes a delicate music-box / celestial celesta instrumental of Happy Birthday
const fs = require('fs');
const path = require('path');

const sampleRate = 44100;
const bpm = 76;
const beatSec = 60 / bpm;

// Happy Birthday melody in key of F Major (warm, soothing, celestial pitch)
// F4, G4, A4, Bb4, C5, D5, E5, F5
const notes = {
  'REST': 0,
  'C4': 261.63,
  'D4': 293.66,
  'E4': 329.63,
  'F4': 349.23,
  'G4': 392.00,
  'A4': 440.00,
  'Bb4': 466.16,
  'B4': 493.88,
  'C5': 523.25,
  'D5': 587.33,
  'E5': 659.25,
  'F5': 698.46,
  'G5': 783.99,
  'A5': 880.00,
  'Bb5': 932.33,
  'C6': 1046.50
};

// Sequence of [note, durationInBeats, chordHarmony]
const melody = [
  // Intro gentle sparkles
  ['C5', 0.5, ['F4', 'A4']], ['E5', 0.5, []], ['G5', 1.0, ['C4']], ['REST', 0.5, []],
  // Happy Birthday to you
  ['C4', 0.75, ['F4', 'A4']], ['C4', 0.25, []],
  ['D4', 1.0, ['F4', 'Bb4']],
  ['C4', 1.0, ['F4', 'A4']],
  ['F4', 1.0, ['A4', 'C5']],
  ['E4', 2.0, ['G4', 'C5']],

  // Happy Birthday to you
  ['C4', 0.75, ['G4', 'Bb4']], ['C4', 0.25, []],
  ['D4', 1.0, ['G4', 'B4']],
  ['C4', 1.0, ['G4', 'C5']],
  ['G4', 1.0, ['B4', 'D5']],
  ['F4', 2.0, ['A4', 'C5']],

  // Happy Birthday Dear Suvarna
  ['C4', 0.75, ['F4', 'A4']], ['C4', 0.25, []],
  ['C5', 1.0, ['F4', 'A4', 'C5']],
  ['A4', 1.0, ['D4', 'F4']],
  ['F4', 1.0, ['Bb4', 'D5']],
  ['E4', 1.0, ['G4', 'C5']],
  ['D4', 2.0, ['F4', 'Bb4']],

  // Happy Birthday to you
  ['Bb4', 0.75, ['D4', 'G4', 'Bb4']], ['Bb4', 0.25, []],
  ['A4', 1.0, ['F4', 'C5']],
  ['F4', 1.0, ['D4', 'A4']],
  ['G4', 1.0, ['C4', 'E4', 'G4']],
  ['F4', 3.0, ['F4', 'A4', 'C5', 'F5']],

  // Outro sparkle chimes
  ['A5', 0.5, []], ['C6', 0.5, []], ['F5', 1.5, ['F4', 'A4', 'C5']],
  ['REST', 1.0, []]
];

// Calculate total duration
let totalBeats = 0;
melody.forEach(item => totalBeats += item[1]);
const totalSamples = Math.floor((totalBeats * beatSec + 3) * sampleRate); // +3s ring-out tail
const buffer = new Float32Array(totalSamples);

// Music box bell / celesta tone generator:
// rich fundamental + chime overtone + exponential decay + soft stereo width
function addChime(freq, startSample, durationSamples, amp = 0.25) {
  if (freq <= 0) return;
  for (let i = 0; i < durationSamples && (startSample + i) < totalSamples; i++) {
    const t = i / sampleRate;
    // Bell envelope: fast attack (5ms), exponential ring out
    const attack = Math.min(1.0, t / 0.005);
    const decay = Math.exp(-t * 2.8);
    const env = attack * decay * amp;

    // Harmonic balance of a crystalline music box
    const wave =
      0.65 * Math.sin(2 * Math.PI * freq * t) +
      0.25 * Math.sin(2 * Math.PI * freq * 2.002 * t) +
      0.10 * Math.sin(2 * Math.PI * freq * 3.005 * t) +
      0.05 * Math.sin(2 * Math.PI * freq * 4.01 * t);

    buffer[startSample + i] += wave * env;
  }
}

// Render the melody and chords
let currentSample = Math.floor(sampleRate * 0.5); // start with gentle 0.5s pause
for (const [note, durationBeats, chords] of melody) {
  const durSamples = Math.floor(beatSec * durationBeats * sampleRate);
  const ringSamples = Math.floor(sampleRate * 2.8); // allow bell to resonate

  const freq = notes[note] || 0;
  if (freq > 0) {
    addChime(freq, currentSample, ringSamples, 0.32);
  }

  // Chords / accompaniments (softer volume)
  if (chords && chords.length) {
    chords.forEach((chordNote, idx) => {
      const chordFreq = notes[chordNote] || 0;
      if (chordFreq > 0) {
        // slight arpeggiation delay for romantic music-box feel
        const delay = Math.floor(sampleRate * 0.035 * (idx + 1));
        addChime(chordFreq, currentSample + delay, ringSamples, 0.16);
      }
    });
  }

  currentSample += durSamples;
}

// Add simple warm stereo delay / reverb effect to soften into a dreamlike texture
const echoDelaySamples = Math.floor(sampleRate * 0.28);
const echoFeedback = 0.28;
for (let i = echoDelaySamples; i < totalSamples; i++) {
  buffer[i] += buffer[i - echoDelaySamples] * echoFeedback;
}

// Normalize buffer to avoid clipping and ensure optimal volume
let maxPeak = 0;
for (let i = 0; i < totalSamples; i++) {
  const abs = Math.abs(buffer[i]);
  if (abs > maxPeak) maxPeak = abs;
}
const gain = maxPeak > 0 ? (0.85 / maxPeak) : 1;

// Create 16-bit PCM WAV
const wavHeaderSize = 44;
const dataSize = totalSamples * 2 * 2; // 16-bit stereo
const outBuffer = Buffer.alloc(wavHeaderSize + dataSize);

// Write WAV Header
outBuffer.write('RIFF', 0);
outBuffer.writeUInt32LE(36 + dataSize, 4);
outBuffer.write('WAVE', 8);
outBuffer.write('fmt ', 12);
outBuffer.writeUInt32LE(16, 16); // Subchunk1Size (16 for PCM)
outBuffer.writeUInt16LE(1, 20); // AudioFormat (1 = PCM)
outBuffer.writeUInt16LE(2, 22); // NumChannels (2 = Stereo)
outBuffer.writeUInt32LE(sampleRate, 24); // SampleRate
outBuffer.writeUInt32LE(sampleRate * 2 * 2, 28); // ByteRate
outBuffer.writeUInt16LE(4, 32); // BlockAlign
outBuffer.writeUInt16LE(16, 34); // BitsPerSample
outBuffer.write('data', 36);
outBuffer.writeUInt32LE(dataSize, 40);

// Write stereo samples
let offset = 44;
for (let i = 0; i < totalSamples; i++) {
  const sample = Math.max(-1, Math.min(1, buffer[i] * gain));
  const intSample = Math.floor(sample * 32767);
  // Left channel
  outBuffer.writeInt16LE(intSample, offset);
  offset += 2;
  // Right channel (gentle stereo shift)
  const rightSample = Math.max(-1, Math.min(1, (buffer[Math.max(0, i - 120)] || buffer[i]) * gain));
  outBuffer.writeInt16LE(Math.floor(rightSample * 32767), offset);
  offset += 2;
}

const audioDir = path.join(__dirname, 'public', 'assets', 'audio');
fs.mkdirSync(audioDir, { recursive: true });
fs.writeFileSync(path.join(audioDir, 'birthday-music.mp3'), outBuffer);
fs.writeFileSync(path.join(audioDir, 'birthday-music.wav'), outBuffer);
console.log('Audio file generated successfully: length = ' + (totalSamples / sampleRate).toFixed(1) + ' seconds');
