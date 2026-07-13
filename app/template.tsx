import ScrollFx from "@/components/motion/ScrollFx";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="page-enter flex min-h-full flex-1 flex-col">
      <ScrollFx />
      {children}
    </div>
  );
}
