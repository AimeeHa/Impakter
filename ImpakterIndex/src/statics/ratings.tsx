import a from '../assets/ratings/A.svg';
import b from '../assets/ratings/B.svg';
import c from '../assets/ratings/C.svg';
import d from '../assets/ratings/D.svg';
import f from '../assets/ratings/F.svg';

export const ratings = [
  {
    rating: 'A',
    meaning: 'Excellent',
    description: '(Industry Leader)',
    img: a,
    color: '#A5B9B0',
  },
  {
    rating: 'B',
    meaning: 'Good',
    description: '(Above Average)',
    img: b,
    color: '#CEE2CB',
  },
  {
    rating: 'C',
    meaning: 'Satisfactory',
    description: '(Meeting Expectations)',
    img: c,
    color: '#F3E173',
  },
  {
    rating: 'D',
    meaning: 'Poor',
    description: '(Below Expectations)',
    img: d,
    color: '#F4B684',
  },
  {
    rating: 'F',
    meaning: 'Fail',
    description: '(No Initiatives)',
    img: f,
    color: '#F29696',
  },
];
