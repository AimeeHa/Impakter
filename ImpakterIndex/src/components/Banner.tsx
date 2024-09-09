import SearchBar from './searchBar';

interface BannerProps {
  title: string;
  subtitle?: string;
}

export default function Banner({ title, subtitle }: BannerProps) {
  return (
    <section className="main-section h-[calc(75vh-var(--nav-height))] gap-2">
      <h1 className="text-h1 font-[600]">{title}</h1>
      <p className="pb-[5rem]">{subtitle}</p>
      <SearchBar />
    </section>
  );
}
