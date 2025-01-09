import React from "react";
import { Accordion, AccordionTab } from "primereact/accordion";
import { Link } from "react-router-dom";

export default function FaqPage() {
  return (
    <div>
      <h1 className="section-titles faq-page-title">
        We're here to answer all your question
      </h1>
      <p>
        If you're new to Flexnet or looking to solution for your problem, this
        section will help you learn more about the Flexnet and its features.
      </p>
      <div className="faq-parent container mx-auto px-6 py-10">
        {/* General FlexNet Overview */}
        <div className="faq-container">
          <h1>General FlexNet Overview</h1>
          <div className="card accordion-box">
            <Accordion>
              <AccordionTab header="What is FlexNet and how does it work?">
                <p>
                  FlexNet is a comprehensive connectivity solution providing
                  both 4G and 5G network capabilities for various industries.
                </p>
              </AccordionTab>
              <AccordionTab header="Who can benefit from FlexNet solutions?">
                <p>
                  FlexNet benefits businesses, industries, and enterprises
                  seeking reliable and scalable connectivity solutions.
                </p>
              </AccordionTab>
              <AccordionTab header="What industries does FlexNet cater to?">
                <p>
                  FlexNet caters to industries like manufacturing, logistics,
                  healthcare, mining, and more.
                </p>
              </AccordionTab>
              <AccordionTab header="What makes FlexNet different from other 4G/5G connectivity providers?">
                <p>
                  FlexNet stands out due to its flexible deployment models,
                  integration with edge computing, and AI-powered features.
                </p>
              </AccordionTab>
              <AccordionTab header="Can I use FlexNet for both 4G and 5G networks?">
                <p>Yes, FlexNet supports both 4G and 5G networks seamlessly.</p>
              </AccordionTab>
              <AccordionTab header="What deployment models does FlexNet offer?">
                <p>
                  FlexNet offers cloud-based, on-premises, and hybrid deployment
                  models.
                </p>
              </AccordionTab>
              <AccordionTab header="Is FlexNet suitable for small businesses?">
                <p>
                  Yes, FlexNet's flexibility and scalability make it suitable
                  for small businesses as well.
                </p>
              </AccordionTab>
            </Accordion>
          </div>
        </div>

        {/* Connectivity & Network Solutions */}
        <div className="faq-container">
          <h1>Connectivity & Network Solutions</h1>
          <div className="card accordion-box">
            <Accordion>
              <AccordionTab header="How is FlexNet deployed in an on-premises setup?">
                <p>
                  FlexNet is deployed with local servers and equipment, ensuring
                  data security and low-latency operations.
                </p>
              </AccordionTab>
              <AccordionTab header="What is the On-Prem Portable solution, and how does it work?">
                <p>
                  The On-Prem Portable solution provides a mobile network
                  solution for remote or temporary locations.
                </p>
              </AccordionTab>
              <AccordionTab header="How does FlexNet's cloud-based model work?">
                <p>
                  FlexNet’s cloud model allows network management through
                  remote, scalable infrastructure for easy deployment.
                </p>
              </AccordionTab>
              <AccordionTab header="What kind of devices are compatible with FlexNet’s network?">
                <p>
                  FlexNet supports various devices, including IoT, mobile, and
                  enterprise systems.
                </p>
              </AccordionTab>
              <AccordionTab header="How do I extend FlexNet coverage in remote areas?">
                <p>
                  FlexNet offers repeaters and portable solutions to extend
                  coverage in remote areas.
                </p>
              </AccordionTab>
              <AccordionTab header="What equipment is included with each FlexNet deployment?">
                <p>
                  FlexNet deployments include routers, antennas, and necessary
                  hardware.
                </p>
              </AccordionTab>
              <AccordionTab header="What happens if my location doesn’t have public network coverage?">
                <p>
                  FlexNet can deploy a private network in locations without
                  public network coverage.
                </p>
              </AccordionTab>
            </Accordion>
          </div>
        </div>

        {/* FlexNet Marketplace */}
        <div className="faq-container">
          <h1>FlexNet Marketplace</h1>
          <div className="card accordion-box">
            <Accordion>
              <AccordionTab header="What is the FlexNet Marketplace?">
                <p>
                  The FlexNet Marketplace is an online platform for purchasing
                  applications and devices that work with FlexNet.
                </p>
              </AccordionTab>
              <AccordionTab header="How do I access applications and devices in the marketplace?">
                <p>
                  You can access applications and devices via the FlexNet portal
                  with authorized credentials.
                </p>
              </AccordionTab>
              <AccordionTab header="Are the applications tailored for specific industries?">
                <p>
                  Yes, the applications in the marketplace are tailored to
                  industries like mining, logistics, and healthcare.
                </p>
              </AccordionTab>
              <AccordionTab header="Can I customize solutions available in the marketplace?">
                <p>
                  Yes, FlexNet offers customization of marketplace solutions to
                  meet business-specific needs.
                </p>
              </AccordionTab>
              <AccordionTab header="How are marketplace applications integrated with my existing system?">
                <p>
                  Applications are designed for seamless integration through
                  APIs with your existing infrastructure.
                </p>
              </AccordionTab>
              <AccordionTab header="How are devices in the marketplace certified for FlexNet?">
                <p>
                  All devices are tested and certified to ensure compatibility
                  with FlexNet’s network.
                </p>
              </AccordionTab>
              <AccordionTab header="Can I purchase hardware or software separately from the marketplace?">
                <p>
                  Yes, hardware and software can be purchased separately from
                  the marketplace.
                </p>
              </AccordionTab>
            </Accordion>
          </div>
        </div>

        {/* Industry-Specific Solutions */}
        <div className="faq-container">
          <h1>Industry-Specific Solutions</h1>
          <div className="card accordion-box">
            <Accordion>
              <AccordionTab header="What solutions does FlexNet offer for the construction industry?">
                <p>
                  FlexNet provides solutions that enhance site connectivity,
                  safety, and project management for the construction industry.
                </p>
              </AccordionTab>
              <AccordionTab header="How does FlexNet support logistics and supply chain management?">
                <p>
                  FlexNet optimizes logistics by providing reliable network
                  solutions for tracking and managing supply chain operations.
                </p>
              </AccordionTab>
              <AccordionTab header="How does FlexNet improve media and broadcast operations?">
                <p>
                  FlexNet offers high-speed, low-latency networks ideal for
                  real-time media and broadcast operations.
                </p>
              </AccordionTab>
              <AccordionTab header="What are the unique use cases for FlexNet in mining?">
                <p>
                  FlexNet helps mining operations with underground and surface
                  connectivity solutions for better monitoring and automation.
                </p>
              </AccordionTab>
              <AccordionTab header="How does FlexNet cater to maritime industries?">
                <p>
                  FlexNet extends reliable network solutions for maritime use,
                  supporting vessels and ports with high-speed connectivity.
                </p>
              </AccordionTab>
              <AccordionTab header="Can FlexNet be used for energy-saving applications in smart cities?">
                <p>
                  Yes, FlexNet is leveraged in smart cities for energy-efficient
                  monitoring and IoT-based applications.
                </p>
              </AccordionTab>
            </Accordion>
          </div>
        </div>

        {/* Partner Solutions */}
        <div className="faq-container">
          <h1>Partner Solutions</h1>
          <div className="card accordion-box">
            <Accordion>
              <AccordionTab header="How can I become a FlexNet solution partner?">
                <p>
                  You can become a FlexNet partner by applying through the
                  official partner program on the FlexNet website.
                </p>
              </AccordionTab>
              <AccordionTab header="What is the difference between a solution partner and a reseller partner?">
                <p>
                  Solution partners help integrate FlexNet into customer
                  systems, while reseller partners focus on distributing FlexNet
                  solutions.
                </p>
              </AccordionTab>
              <AccordionTab header="What are the benefits of becoming a FlexNet partner?">
                <p>
                  FlexNet partners receive technical support, marketing
                  resources, and opportunities for co-development.
                </p>
              </AccordionTab>
              <AccordionTab header="Can I integrate my existing solutions into the FlexNet ecosystem?">
                <p>
                  Yes, FlexNet allows integration of third-party solutions into
                  its ecosystem through APIs and partnerships.
                </p>
              </AccordionTab>
              <AccordionTab header="How do FlexNet resellers offer value-added services?">
                <p>
                  Resellers offer additional services such as deployment,
                  training, and post-installation support to customers.
                </p>
              </AccordionTab>
              <AccordionTab header="Can partners white-label FlexNet solutions?">
                <p>
                  Yes, FlexNet solutions can be white-labeled by partners for
                  branding and reselling purposes.
                </p>
              </AccordionTab>
            </Accordion>
          </div>
        </div>

        {/* Technical & Deployment Details */}
        <div className="faq-container">
          <h1>Technical & Deployment Details</h1>
          <div className="card accordion-box">
            <Accordion>
              <AccordionTab header="What is the typical installation time for a FlexNet deployment?">
                <p>
                  Typical installation time depends on the deployment model, but
                  on average takes 2-4 weeks.
                </p>
              </AccordionTab>
              <AccordionTab header="What kind of server is required for on-premises FlexNet solutions?">
                <p>
                  FlexNet on-premises solutions require dedicated servers with
                  virtualization capabilities.
                </p>
              </AccordionTab>
              <AccordionTab header="Can FlexNet work with my existing IT infrastructure?">
                <p>
                  Yes, FlexNet is designed to integrate with most existing IT
                  infrastructures seamlessly.
                </p>
              </AccordionTab>
              <AccordionTab header="How secure is the FlexNet network?">
                <p>
                  FlexNet uses advanced encryption and security protocols to
                  ensure data protection across its network.
                </p>
              </AccordionTab>
              <AccordionTab header="How do I monitor and manage FlexNet networks once deployed?">
                <p>
                  FlexNet provides a centralized management interface for
                  monitoring and managing networks remotely.
                </p>
              </AccordionTab>
              <AccordionTab header="What happens if my FlexNet equipment malfunctions?">
                <p>
                  FlexNet offers hardware replacement and technical support for
                  faulty equipment.
                </p>
              </AccordionTab>
              <AccordionTab header="How is data traffic managed on FlexNet?">
                <p>
                  FlexNet utilizes advanced routing and traffic management
                  algorithms to optimize network performance.
                </p>
              </AccordionTab>
              <AccordionTab header="What bandwidth and speed can I expect with FlexNet 5G?">
                <p>
                  FlexNet 5G can deliver speeds up to 10 Gbps, depending on the
                  deployment and location.
                </p>
              </AccordionTab>
            </Accordion>
          </div>
        </div>

        {/* Pricing & Contracts */}
        <div className="faq-container">
          <h1>Pricing & Contracts</h1>
          <div className="card accordion-box">
            <Accordion>
              <AccordionTab header="How is FlexNet pricing structured?">
                <p>
                  FlexNet pricing is based on the deployment model, network
                  usage, and additional services required.
                </p>
              </AccordionTab>
              <AccordionTab header="Are there any hidden fees with FlexNet deployments?">
                <p>
                  There are no hidden fees; all costs are clearly outlined in
                  the service agreement.
                </p>
              </AccordionTab>
              <AccordionTab header="Do I need to sign a long-term contract?">
                <p>
                  FlexNet offers both long-term and flexible short-term
                  contracts based on customer needs.
                </p>
              </AccordionTab>
              <AccordionTab header="What are the payment options for FlexNet services?">
                <p>
                  Payment options include monthly, quarterly, or annual billing
                  cycles.
                </p>
              </AccordionTab>
              <AccordionTab header="Can I upgrade or downgrade my FlexNet plan?">
                <p>
                  Yes, FlexNet plans can be adjusted based on your changing
                  requirements.
                </p>
              </AccordionTab>
              <AccordionTab header="How is pricing determined for different FlexNet verticals?">
                <p>
                  Pricing is determined based on industry-specific features and
                  deployment needs.
                </p>
              </AccordionTab>
              <AccordionTab header="Are there additional costs for using the FlexNet Marketplace?">
                <p>
                  Some applications and hardware from the marketplace may have
                  additional costs.
                </p>
              </AccordionTab>
            </Accordion>
          </div>
        </div>

        {/* Support & Maintenance */}
        <div className="faq-container">
          <h1>Support & Maintenance</h1>
          <div className="card accordion-box">
            <Accordion>
              <AccordionTab header="What kind of customer support does FlexNet provide?">
                <p>
                  FlexNet offers 24/7 customer support, including technical
                  assistance and troubleshooting services.
                </p>
              </AccordionTab>
              <AccordionTab header="How do I request technical assistance?">
                <p>
                  You can request technical assistance via the customer support
                  portal or by contacting FlexNet support directly.
                </p>
              </AccordionTab>
              <AccordionTab header="Is there a warranty on FlexNet equipment?">
                <p>
                  Yes, FlexNet equipment comes with a manufacturer warranty and
                  additional support options.
                </p>
              </AccordionTab>
              <AccordionTab header="What is included in FlexNet’s maintenance services?">
                <p>
                  FlexNet’s maintenance services include equipment checks,
                  software updates, and system monitoring.
                </p>
              </AccordionTab>
              <AccordionTab header="Can I manage FlexNet networks remotely?">
                <p>
                  Yes, FlexNet provides remote network management through its
                  centralized control platform.
                </p>
              </AccordionTab>
              <AccordionTab header="What are the response times for FlexNet support issues?">
                <p>
                  Response times for FlexNet support issues vary by service
                  level agreement (SLA), but critical issues are typically
                  addressed within hours.
                </p>
              </AccordionTab>
            </Accordion>
          </div>
        </div>

        {/* Edge Computing & AI Solutions */}
        <div className="faq-container">
          <h1>Edge Computing & AI Solutions</h1>
          <div className="card accordion-box">
            <Accordion>
              <AccordionTab header="What is FlexNet Edge, and how does it enhance performance?">
                <p>
                  FlexNet Edge enhances performance by processing data closer to
                  the source, reducing latency and enabling real-time analytics.
                </p>
              </AccordionTab>
              <AccordionTab header="Can FlexNet Edge be used for AI-powered applications?">
                <p>
                  Yes, FlexNet Edge supports AI-powered applications, enabling
                  efficient real-time processing for various industries.
                </p>
              </AccordionTab>
              <AccordionTab header="How does Edge Computing improve real-time processing for FlexNet?">
                <p>
                  Edge computing reduces the need to send data to the cloud by
                  processing it locally, allowing faster real-time decisions.
                </p>
              </AccordionTab>
              <AccordionTab header="What types of AI applications are supported on FlexNet Edge?">
                <p>
                  FlexNet Edge supports AI applications such as machine
                  learning, predictive maintenance, and computer vision.
                </p>
              </AccordionTab>
              <AccordionTab header="How is FlexNet Edge integrated into the marketplace solutions?">
                <p>
                  FlexNet Edge is integrated with marketplace solutions to offer
                  AI-powered tools and applications that enhance business
                  operations.
                </p>
              </AccordionTab>
            </Accordion>
          </div>
        </div>
      </div>
      <div className="faq-page-bottom">
        <h2>Got any more questions?</h2>
        <button className="contact-button">
          <Link to="/contact-us">Contact With Us</Link>
        </button>
      </div>
    </div>
  );
}
