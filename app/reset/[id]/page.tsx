import { notFound } from "next/navigation";
import { ResetPageShell } from "@/components/reset/reset-page-shell";
import { ResetFlow } from "@/components/reset/reset-flow";
import { resetsById } from "@/lib/resets/data";

type ResetPageProps = {
  params: Promise<{ id: string }>;
};

export default async function ResetDetailPage({ params }: ResetPageProps) {
  const { id } = await params;
  const reset = resetsById[id];

  if (!reset) notFound();

  return (
    <ResetPageShell
      title={reset.title}
      lead={reset.whenLine}
      backHref="/reset"
      backLabel="Back to Resets"
    >
      <ResetFlow key={reset.id} reset={reset} />
    </ResetPageShell>
  );
}
