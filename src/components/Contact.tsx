const contactInfo: { type: string; src: string; href: string }[] = [
  {
    type: "Email",
    src: "/icons/email-icon.svg",
    href: "mailto:Tilhun.Isak@gmail.com",
  },
  {
    type: "LinkedIn",
    src: "/icons/linkedin-icon.svg",
    href: "https://www.linkedin.com/in/isak-tilahun-27b242280/",
  },
  {
    type: "Instagram",
    src: "/icons/instagram-icon.svg",
    href: "https://www.instagram.com/letzgochamp/",
  },
];

const Contact = () => {
  return (
    <div className="space-y-6">
      <section className="">
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
