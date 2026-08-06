import PublicHeader from "@/components/layout/PublicHeader";
import PublicFooter from "@/components/layout/PublicFooter";
import { LanguageProvider } from "@/components/layout/LanguageProvider";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LanguageProvider>
      <div className="flex flex-col min-h-screen">
        <PublicHeader />
        <main className="flex-1">{children}</main>
        <PublicFooter />
      </div>
    </LanguageProvider>
  );
}
