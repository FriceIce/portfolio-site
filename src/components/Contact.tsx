const contactInfo: { type: string; src: string; href: string }[] = [
  {
    type: "Email",
    src: "/portfolio-site/icons/email-icon.svg",
    href: "mailto:Tilhun.Isak@gmail.com",
  },
  {
    type: "LinkedIn",
    src: "/portfolio-site/icons/linkedin-icon.svg",
    href: "https://www.linkedin.com/in/isak-tilahun-27b242280/",
  },
  {
    type: "Instagram",
    src: "/portfolio-site/icons/instagram-icon.svg",
    href: "https://www.instagram.com/letzgochamp/",
  },
];

const Contact = () => {
  return (
    <div
      id="contact"
      className="bg-zinc-50 space-y-6 w-dvw h-full py-20 lg:py-60"
    >
      <section className="">
        <p className="text-center text-xs lg:text-base">
          Searching for opportunities
        </p>
        <h2 className="text-5xl lg:text-6xl font-bold text-center">
          Let's connect
        </h2>
      </section>
      <section className="">
        <ul className="flex justify-center">
          {contactInfo.map((contact, index) => {
            return (
              <li key={index} className="px-3 py-2">
                <a
                  href={contact.href}
                  rel="noreferrer"
                  target="_blank"
                  className="flex items-center gap-1"
                >
                  <img
                    src={contact.src}
                    alt={contact.type}
                    className="size-8 object-cover object-center lg:hover:scale-105 transition-all"
                  />
                  <p className="text-sm font-bold">{contact.type}</p>
                </a>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
};

export default Contact;
