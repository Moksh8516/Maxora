import type { Metadata } from "next";
import PolicyPage from "../components/ui/PolicyPage";

export const metadata: Metadata = {
  title: "Terms of Service | Maxora Technology",
  description:
    "The terms and conditions that apply when you use the Maxora Technology website or engage us for digital engineering and design services.",
  alternates: {
    canonical: "/terms",
  },
  openGraph: {
    title: "Terms of Service | Maxora Technology",
    description:
      "Terms of service and legal agreement for Maxora Technology website and engineering services.",
    url: "/terms",
    siteName: "Maxora Technology",
  },
};

export default function TermsPage() {
  return (
    <PolicyPage
      eyebrow="Legal Terms"
      title="Terms of Service"
      description="These terms set out a practical, fair foundation for using the Maxora Technology website and working with our team."
      lastUpdated="September 9, 2026"
      sections={[
        {
          title: "1. Agreement and scope",
          content: (
            <p>
              These Terms of Service (&quot;Terms&quot;) apply to your use of
              the Maxora Technology website and to services we provide unless a
              separate written agreement, proposal, statement of work, or order
              form says otherwise. By using the website or accepting a proposal,
              you agree to these Terms. If you accept on behalf of a company or
              organisation, you confirm that you have authority to bind it.
            </p>
          ),
        },
        {
          title: "2. Our services",
          content: (
            <p>
              Maxora provides digital services that may include web development,
              mobile applications, eCommerce, WordPress solutions, business
              systems, automation, integrations, consulting, maintenance, and
              related services. The exact deliverables, milestones,
              dependencies, fees, assumptions, acceptance criteria, and support
              commitments for a project will be described in the applicable
              written proposal or statement of work. Website descriptions are
              general information and are not a promise that every service or
              technology is suitable for every project.
            </p>
          ),
        },
        {
          title: "3. Client responsibilities",
          content: (
            <>
              <p>
                You agree to provide timely, accurate information, access,
                feedback, approvals, content, and materials reasonably needed
                for the project. You are responsible for:
              </p>
              <ul>
                <li>
                  Ensuring that materials, data, trademarks, images, copy, and
                  instructions you provide may lawfully be used.
                </li>
                <li>
                  Reviewing work, testing deliverables, and raising specific
                  issues within the review period stated in the project
                  agreement.
                </li>
                <li>
                  Maintaining appropriate backups and security for systems,
                  credentials, and data under your control.
                </li>
                <li>
                  Obtaining any licences, consents, notices, or permissions
                  required for your business, users, content, and regulated
                  activities.
                </li>
              </ul>
              <p className="mt-3">
                Delays caused by missing information, access, decisions,
                approvals, or third parties may reasonably affect timelines and
                costs.
              </p>
            </>
          ),
        },
        {
          title: "4. Fees, invoices, and expenses",
          content: (
            <p>
              Fees, taxes, payment milestones, currency, and accepted payment
              methods will be stated in the applicable proposal or agreement.
              Unless that document says otherwise, invoices are due by the
              stated due date. We may pause work after giving notice when an
              undisputed invoice is overdue. You are responsible for approved
              third-party costs, platform fees, hosting, domains, licences, paid
              APIs, and usage charges. We will discuss material changes in scope
              or cost before carrying them out where reasonably possible.
            </p>
          ),
        },
        {
          title: "5. Changes, acceptance, and support",
          content: (
            <p>
              A request outside the agreed scope may require a change order or
              revised estimate. A deliverable is accepted when you approve it,
              put it into production, or do not report a material failure
              against the agreed acceptance criteria within the applicable
              review period. Maintenance, hosting, support response times, and
              post-launch changes are included only when expressly agreed in
              writing.
            </p>
          ),
        },
        {
          title: "6. Intellectual property",
          content: (
            <p>
              Each party keeps ownership of materials and intellectual property
              it owned before the project. Subject to payment of all applicable
              fees, Maxora assigns or grants the rights to the custom project
              deliverables described in the applicable agreement, to the extent
              those rights can be assigned or granted. Maxora retains rights in
              its pre-existing tools, reusable code, methods, know-how,
              templates, libraries, and open-source components, and grants you
              the licence needed to use them as part of the deliverables.
              Third-party and open-source components remain subject to their own
              licence terms. We may display completed work in our portfolio only
              where the project agreement permits it or you give permission.
            </p>
          ),
        },
        {
          title: "7. Confidentiality and data",
          content: (
            <p>
              Each party will protect non-public information received from the
              other party and use it only for the agreed relationship. This
              obligation does not apply to information that is public without
              breach, already known lawfully, independently developed, or
              required to be disclosed by law. If we process personal data on
              your behalf, you remain responsible for having an appropriate
              legal basis and notices, and the parties should document required
              processing, security, and transfer arrangements in a separate
              data-processing agreement where necessary.
            </p>
          ),
        },
        {
          title: "8. Third-party services and open source",
          content: (
            <p>
              Projects may depend on third-party platforms, hosting, payment
              providers, app stores, APIs, plugins, or open-source software.
              Those services are controlled by their respective providers and
              may change, become unavailable, or impose separate terms and fees.
              We are not responsible for a third party&apos;s acts or outages
              outside our reasonable control, although we will work with you on
              reasonable alternatives where the project scope allows.
            </p>
          ),
        },
        {
          title: "9. Warranties and disclaimers",
          content: (
            <p>
              We will perform agreed professional services with reasonable care
              and skill. Except for commitments expressly stated in a signed
              project agreement, the website and services are provided on an
              as-available basis. We do not guarantee uninterrupted operation, a
              particular search ranking, revenue result, security outcome,
              business outcome, or compatibility with every future browser,
              device, platform, or third-party change. You remain responsible
              for business, legal, accessibility, security, tax, and regulatory
              decisions relating to your use of a deliverable.
            </p>
          ),
        },
        {
          title: "10. Liability",
          content: (
            <p>
              To the maximum extent permitted by applicable law, neither party
              will be liable for indirect, incidental, special, consequential,
              exemplary, or loss-of-profit damages arising from the
              relationship. Maxora&apos;s total liability for a claim relating
              to a project will not exceed the fees paid or payable for that
              project during the six months before the event giving rise to the
              claim, except to the extent such a limitation is not permitted by
              law. Nothing in these Terms excludes liability that cannot
              lawfully be excluded or limited, including liability for fraud or
              deliberate misconduct.
            </p>
          ),
        },
        {
          title: "11. Suspension and termination",
          content: (
            <p>
              Either party may end a project or service relationship in
              accordance with the applicable agreement. If there is no written
              termination process, either party may give reasonable written
              notice. We may suspend access or work for a serious security risk,
              unlawful use, or material non-payment after notice where
              appropriate. On termination, you will pay for approved work
              completed and non-cancellable commitments up to the termination
              date. Provisions intended by their nature to continue, including
              confidentiality, intellectual property, payment obligations,
              disclaimers, and liability limits, will continue.
            </p>
          ),
        },
        {
          title: "12. Acceptable use and general terms",
          content: (
            <p>
              You must not use our website or services to break the law,
              infringe rights, distribute malicious code, attempt unauthorised
              access, misrepresent your identity, or interfere with other users
              or systems. Neither party is responsible for delay caused by
              events beyond reasonable control. You may not transfer the
              agreement without consent, except as part of a permitted business
              transfer. If a provision is unenforceable, the remaining
              provisions remain effective. These Terms and the applicable
              project agreement represent the understanding between the parties
              about their subject matter. We may update these website Terms by
              posting a revised version; project agreements remain governed by
              their own change process.
            </p>
          ),
        },
        {
          title: "13. Contact",
          content: (
            <p>
              Questions or notices about these Terms should be sent to{" "}
              <a href="mailto:info@maxoratechnology.com">
                info@maxoratechnology.com
              </a>
              . The parties will try in good faith to resolve a dispute through
              direct discussion before starting formal proceedings, unless
              urgent legal relief is required. Any formal proceeding must be
              brought before a court or tribunal with lawful jurisdiction over
              the dispute.
            </p>
          ),
        },
      ]}
    />
  );
}
