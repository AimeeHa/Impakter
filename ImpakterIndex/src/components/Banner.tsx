import SearchBar from './searchBar';
import banner2 from '../assets/banner2.jpeg';

interface BannerProps {
  title: string;
  subtitle?: string;
}

export default function Banner({ title, subtitle }: BannerProps) {
  return (
    <section
      className="main-section h-[calc(75vh-var(--nav-height))] gap-2 relative bg-cover"
      style={{ backgroundImage: `url(${banner2})` }}
    >
      <div
        className="w-[31.25rem] text-balance absolute left-[16%] top-[25%] flex flex-col
      gap-3 text-white"
      >
        <h1 className="text-h1 font-[600] whitespace-pre-line pb-3">{title}</h1>
        <p>{subtitle}</p>
      </div>
      <div
        className="w-max absolute left-1/2 top-[62%] flex flex-col
        justify-center items-center -translate-x-1/2"
      >
        <SearchBar componentName={'banner'} />
      </div>
    </section>
  );
}
