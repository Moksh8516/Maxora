import type { Metadata } from "next";
import PolicyPage from "../components/ui/PolicyPage";

export const metadata: Metadata = {
  title: "Privacy Policy | Maxora Technology",
  description:
    "How Maxora Technology collects, uses, stores, and protects personal information in accordance with privacy standards.",
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    title: "Privacy Policy | Maxora Technology",
    description:
      "Privacy policy and data protection practices at Maxora Technology.",
    url: "/privacy",
    siteName: "Maxora Technology",
  },
};

export default function PrivacyPage() {
  return (
    <PolicyPage
      eyebrow="Privacy"
      title="Privacy Policy"
      description="We respect your privacy and collect only the information we need to communicate with you, understand your project, and deliver our services."
      lastUpdated="September 9, 2026"
      sections={[
        {
          title: "1. Who we are",
          content: (
            <p>
              This Privacy Policy explains how Maxora Technology
              (&quot;Maxora&quot;, &quot;we&quot;, &quot;us&quot;, or
              &quot;our&quot;) handles personal information when you visit our
              website, contact us, request a proposal, or work with us. For
              privacy questions, contact{" "}
              <a href="mailto:info@maxoratechnology.com">
                info@maxoratechnology.com
              </a>
              .
            </p>
          ),
        },
        {
          title: "2. Information we collect",
          content: (
            <>
              <p>Depending on how you interact with us, we may collect:</p>
              <ul>
                <li>
                  Contact details such as your name, email address, phone
                  number, company, and job title.
                </li>
                <li>
                  Project information you choose to provide, including
                  requirements, budgets, timelines, and business context.
                </li>
                <li>
                  Communication records, such as messages, enquiry details, and
                  support requests.
                </li>
                <li>
                  Technical information such as browser type, device
                  information, approximate location, and pages visited when this
                  is made available through normal web operation or optional
                  analytics.
                </li>
                <li>
                  Information you provide when applying for a role, such as your
                  CV, portfolio, experience, and contact details.
                </li>
              </ul>
              <p className="mt-3">
                Please do not send passwords, payment-card numbers, government
                identifiers, or confidential data that is not needed for your
                enquiry.
              </p>
            </>
          ),
        },
        {
          title: "3. How we use information",
          content: (
            <>
              <p>We use personal information to:</p>
              <ul>
                <li>
                  Respond to enquiries and communicate about requested services.
                </li>
                <li>
                  Prepare proposals, scope projects, provide support, and manage
                  our client relationship.
                </li>
                <li>
                  Operate, secure, troubleshoot, and improve our website and
                  services.
                </li>
                <li>
                  Review job applications and communicate about recruitment.
                </li>
                <li>
                  Meet legal, accounting, security, and fraud-prevention
                  obligations.
                </li>
              </ul>
              <p className="mt-3">
                We do not sell personal information. We do not use your enquiry
                to send marketing messages unrelated to your request without a
                lawful basis or your consent where required.
              </p>
            </>
          ),
        },
        {
          title: "4. Sharing and service providers",
          content: (
            <p>
              We may share information with carefully selected providers that
              help us operate, such as hosting, email delivery, form processing,
              security, storage, accounting, and professional-adviser providers.
              They may use information only to provide services to us and must
              protect it appropriately. We may also disclose information when
              required by law, to protect rights and safety, or as part of a
              business reorganisation or transfer. We do not authorise providers
              to use your information for their own unrelated advertising.
            </p>
          ),
        },
        {
          title: "5. Retention and security",
          content: (
            <p>
              We keep personal information only for as long as reasonably
              necessary for the purposes described here, including to provide
              services, resolve disputes, maintain business records, and meet
              legal obligations. We use reasonable administrative, technical,
              and organisational safeguards, but no online transmission or
              storage system can be guaranteed completely secure. Please contact
              us promptly if you believe information has been sent to us in
              error or your account has been compromised.
            </p>
          ),
        },
        {
          title: "6. Your choices and rights",
          content: (
            <p>
              Depending on where you live, you may have rights to request access
              to, correction of, deletion of, restriction of, or a copy of your
              personal information, or to object to certain processing. You may
              also withdraw consent where processing relies on consent. Send a
              request to{" "}
              <a href="mailto:info@maxoratechnology.com">
                info@maxoratechnology.com
              </a>
              . We may need to verify your identity and may retain information
              where the law permits or requires us to do so. You may also have
              the right to complain to your local data-protection authority.
            </p>
          ),
        },
        {
          title: "7. Children and third-party links",
          content: (
            <p>
              Our website and services are intended for businesses and are not
              directed to children. Our website may link to third-party websites
              or services. Their privacy practices are governed by their own
              policies, and we are not responsible for their content or handling
              of information.
            </p>
          ),
        },
        {
          title: "8. Changes to this policy",
          content: (
            <p>
              We may update this Privacy Policy when our practices, services, or
              legal requirements change. The updated version will be posted on
              this page with a new &quot;Last updated&quot; date. If a change is
              material, we will take additional notice steps when required.
            </p>
          ),
        },
      ]}
    />
  );
}
