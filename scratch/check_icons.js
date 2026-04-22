import * as si from 'react-icons/si';
const specific = [
  'SiJava',
  'SiOracle',
  'SiPython',
  'SiFirebase',
  'SiVisualstudiocode',
  'SiCsharp',
  'SiDotnet',
  'SiMicrosoftsqlserver'
];
specific.forEach(s => {
  console.log(`${s}: ${si[s] ? 'Exists' : 'MISSING'}`);
});
