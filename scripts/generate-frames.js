const fs = require('fs');
const path = require('path');

const framesDir = path.join(__dirname, '..', 'public', 'frames');
const totalFrames = 120;

// Define the greyscale molecular sequence
// Frame progression: intact molecule -> disassembled -> reassembled
const keyFrames = [
  { index: 0, file: 'greyscale_start.png' },    // Intact molecule
  { index: 30, file: 'greyscale_start.png' },   // Still intact
  { index: 60, file: 'greyscale_end.png' },     // Fully disassembled  
  { index: 90, file: 'greyscale_end.png' },     // Still disassembled
  { index: 119, file: 'greyscale_start.png' }   // Reassembled
];

console.log('🧬 Generating greyscale molecular animation frames...\n');

// Generate all 120 frames by duplicating key frames
for (let i = 0; i < totalFrames; i++) {
  // Find which key frame segment we're in
  let sourceFrame = keyFrames[0].file;

  for (let k = 0; k < keyFrames.length - 1; k++) {
    if (i >= keyFrames[k].index && i < keyFrames[k + 1].index) {
      // Calculate progress within this segment
      const progress = (i - keyFrames[k].index) / (keyFrames[k + 1].index - keyFrames[k].index);
      // Use the appropriate key frame based on progress
      sourceFrame = progress < 0.5 ? keyFrames[k].file : keyFrames[k + 1].file;
      break;
    }
  }

  if (i >= keyFrames[keyFrames.length - 1].index) {
    sourceFrame = keyFrames[keyFrames.length - 1].file;
  }

  const targetPath = path.join(framesDir, `molecule_frame_${i}.webp`);
  const sourcePath = path.join(framesDir, sourceFrame);

  // Copy the file
  if (fs.existsSync(sourcePath)) {
    fs.copyFileSync(sourcePath, targetPath);
    if (i % 10 === 0 || i === totalFrames - 1) {
      console.log(`  ✓ Frame ${i.toString().padStart(3, '0')}/${totalFrames} → ${sourceFrame}`);
    }
  } else {
    console.error(`  ✗ Error: Source file not found: ${sourceFrame}`);
  }
}

console.log(`\n✅ Successfully generated ${totalFrames} greyscale molecular frames!`);
console.log('🎬 Animation sequence: Intact → Disassemble → Reassemble\n');
