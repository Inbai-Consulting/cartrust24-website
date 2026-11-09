export const CT_BRAND = {
  name: "CARTRUST24 Kfz-Gutachten",
  phone: "+49 15567 487073",
  phoneRaw: "+4915567487073",
  whatsapp: "+4915567487073",
  email: "info@cartrust24.de",
  street: "Nydamer Weg 16",
  postcode: "22145 Hamburg",
  hrb: "HRB 198354",
  uglong: "CARTRUST24 Kfz-Gutachten UG (haftungsbeschränkt)",
  instagram: "https://www.instagram.com/cartrust24_hh/",
  tiktok: "https://www.tiktok.com/@cartrust24.kfzgutachten",
} as const;

export const CT_NAV = [
  { href: "/", label: "Start" },
  { href: "/leistung", label: "Leistung" },
  { href: "/expertise", label: "Expertise" },
  { href: "/faq", label: "FAQ" },
  { href: "/kontakt", label: "Kontakt" },
] as const;

export const waHref = `https://wa.me/${CT_BRAND.whatsapp.replace("+", "")}`;
export const telHref = `tel:${CT_BRAND.phoneRaw}`;
export const mailHref = `mailto:${CT_BRAND.email}`;
export const instagramHref = CT_BRAND.instagram;
export const tiktokHref = CT_BRAND.tiktok;
