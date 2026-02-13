import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import TrackedLink from "@/components/TrackedLink";

type LegacyRouteNoticeProps = {
  path: string;
  message: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref: string;
  secondaryLabel: string;
};

export default function LegacyRouteNotice({
  path,
  message,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: LegacyRouteNoticeProps) {
  return (
    <section className="ui-section">
      <BreadcrumbJsonLd items={[{ name: "Legacy", path }]} />
      <div className="ui-container max-w-3xl">
        <div className="card p-7 shadow-soft">
          <p className="ui-kicker">Legacy Route</p>
          <h1 className="ui-h2 mt-3">หน้านี้ถูกย้ายในโครงสร้างใหม่</h1>
          <p className="mt-3 ui-p">{message}</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <TrackedLink href={primaryHref} className="btn-primary">{primaryLabel}</TrackedLink>
            <TrackedLink href={secondaryHref} className="btn-secondary">{secondaryLabel}</TrackedLink>
          </div>
        </div>
      </div>
    </section>
  );
}
