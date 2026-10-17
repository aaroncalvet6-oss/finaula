import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { Container } from "@/components/layout/Container";
import { ProfileView } from "@/components/profile/ProfileView";
import { Eyebrow } from "@/components/ui/Typography";
import { courses } from "@/content/courses";

export const metadata: Metadata = pageMetadata({
  title: "Tu perfil",
  description: "Tu progreso y tus certificados, guardados solo en este navegador.",
  path: "/perfil/",
  noindex: true,
});

export default function ProfilePage() {
  return (
    <main>
      <Container width="reading" className="pt-10">
        <Eyebrow>Perfil</Eyebrow>
        <h1 className="mt-3 text-h1 font-semibold tracking-[-0.025em]">Tu progreso</h1>
        <p className="mt-3 text-lead text-muted">
          Todo se guarda solo en este navegador. Si cambias de dispositivo o borras los datos del navegador, empezarás de cero.
        </p>
        <div className="mt-8">
          <ProfileView
            courses={courses.map((c) => ({
              slug: c.slug,
              title: c.title,
              number: c.number,
              lessons: c.lessons.map((l) => l.slug),
            }))}
          />
        </div>
      </Container>
    </main>
  );
}
