import { ResetPageShell } from "@/components/reset/reset-page-shell";
import { ResetList } from "@/components/reset/reset-list";
import { resets } from "@/lib/resets/data";

export default function ResetHomePage() {
  return (
    <ResetPageShell
      title="Resets"
      lead="Choose the moment you are in. Three quiet minutes."
      shellMaxWidthClassName="md:max-w-[800px]"
    >
      <ResetList resets={resets} />
    </ResetPageShell>
  );
}
