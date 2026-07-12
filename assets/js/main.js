"use strict";

const SUPPORTED_LANGUAGES = ["en", "pt", "es"];
const DEFAULT_LANGUAGE = "en";
const LANGUAGE_STORAGE_KEY = "ls-lang";

const CONTACT_EMAIL = "contact@lsagileworks.com.br";
const WHATSAPP_NUMBER = "5531988276388";

const LANGUAGE_LABELS = {
  en: {
    emailSubject: "Consultation Request",
    whatsapp: "WhatsApp",
    defaultMessage:
      "Hello, I would like to discuss a project with LS AgileWorks."
  },
  pt: {
    emailSubject: "Solicitação de consultoria",
    whatsapp: "WhatsApp",
    defaultMessage:
      "Olá, gostaria de conversar sobre um projeto com a LS AgileWorks."
  },
  es: {
    emailSubject: "Solicitud de consultoría",
    whatsapp: "WhatsApp",
    defaultMessage:
      "Hola, me gustaría conversar sobre un proyecto con LS AgileWorks."
  }
};

function getAppElement() {
  return document.getElementById("app");
}

function normalizeLanguage(language) {
  return SUPPORTED_LANGUAGES.includes(language)
    ? language
    : DEFAULT_LANGUAGE;
}

function getInitialLanguage() {
  try {
    const savedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY);

    if (SUPPORTED_LANGUAGES.includes(savedLanguage)) {
      return savedLanguage;
    }
  } catch (error) {
    console.warn("Could not read the saved language.", error);
  }

  const browserLanguage = (
    navigator.language ||
    navigator.userLanguage ||
    DEFAULT_LANGUAGE
  )
    .slice(0, 2)
    .toLowerCase();

  return normalizeLanguage(browserLanguage);
}

function mountLanguage(language) {
  const selectedLanguage = normalizeLanguage(language);
  const app = getAppElement();
  const body = window.LS_BODIES?.[selectedLanguage];

  if (!app) {
    console.error('Application container "#app" was not found.');
    return;
  }

  if (!body) {
    console.error(`Content for language "${selectedLanguage}" was not found.`);
    return;
  }

  app.innerHTML = body;

  document.documentElement.lang =
    selectedLanguage === "pt" ? "pt-BR" : selectedLanguage;

  try {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, selectedLanguage);
  } catch (error) {
    console.warn("Could not save the selected language.", error);
  }

  wireLanguageButtons();
  updateLanguageButtons(selectedLanguage);
  wireContactForm(selectedLanguage);
  wireMobileMenu();
  updateContactLinks();
}

function getLanguageFromButton(button) {
  const value = button.dataset.language ||
    button.textContent?.trim().toLowerCase();

  return SUPPORTED_LANGUAGES.includes(value) ? value : null;
}

function wireLanguageButtons() {
  document.querySelectorAll("button").forEach((button) => {
    const language = getLanguageFromButton(button);

    if (!language) {
      return;
    }

    button.dataset.language = language;

    button.addEventListener("click", () => {
      mountLanguage(language);
    });
  });
}

function updateLanguageButtons(selectedLanguage) {
  document.querySelectorAll("[data-language]").forEach((button) => {
    const language = button.dataset.language;
    const isActive = language === selectedLanguage;

    button.setAttribute("aria-pressed", String(isActive));
    button.classList.toggle("bg-primary", isActive);
    button.classList.toggle("text-primary-foreground", isActive);
    button.classList.toggle("text-muted-foreground", !isActive);
  });
}

function getFormValue(form, fieldId) {
  const field = form.querySelector(`#${fieldId}`);

  if (
    field instanceof HTMLInputElement ||
    field instanceof HTMLTextAreaElement
  ) {
    return field.value.trim();
  }

  return "";
}

function buildContactMessage(form, language) {
  const name = getFormValue(form, "name");
  const email = getFormValue(form, "email");
  const company = getFormValue(form, "company");
  const message =
    getFormValue(form, "message") ||
    LANGUAGE_LABELS[language].defaultMessage;

  return [
    `Name: ${name}`,
    `Company: ${company}`,
    `Email: ${email}`,
    "",
    message
  ].join("\n");
}

function wireContactForm(language) {
  const form = document.querySelector("form");

  if (!(form instanceof HTMLFormElement)) {
    return;
  }

  const requiredFields = ["name", "email", "message"];

  requiredFields.forEach((fieldId) => {
    const field = form.querySelector(`#${fieldId}`);
    field?.setAttribute("required", "");
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!form.reportValidity()) {
      return;
    }

    const subject = LANGUAGE_LABELS[language].emailSubject;
    const body = buildContactMessage(form, language);

    const mailtoUrl =
      `mailto:${CONTACT_EMAIL}` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
  });

  const submitButton = form.querySelector('button[type="submit"]');

  if (!(submitButton instanceof HTMLButtonElement)) {
    return;
  }

  const buttonWrapper = submitButton.parentElement;

  if (buttonWrapper) {
    buttonWrapper.classList.add(
      "flex",
      "flex-wrap",
      "items-center",
      "gap-3"
    );
  }

  if (!form.querySelector("[data-wa-btn]")) {
    const whatsappButton = createWhatsAppButton(form, language);
    submitButton.insertAdjacentElement("afterend", whatsappButton);
  }
}

function createWhatsAppButton(form, language) {
  const button = document.createElement("button");

  button.type = "button";
  button.dataset.waBtn = "1";

  button.className = [
    "inline-flex",
    "items-center",
    "justify-center",
    "gap-2",
    "whitespace-nowrap",
    "text-sm",
    "font-medium",
    "cursor-pointer",
    "transition-colors",
    "focus-visible:outline-none",
    "focus-visible:ring-1",
    "focus-visible:ring-ring",
    "[&_svg]:pointer-events-none",
    "[&_svg]:size-4",
    "[&_svg]:shrink-0",
    "shadow",
    "h-10",
    "rounded-md",
    "px-8",
    "bg-[#25D366]",
    "text-white",
    "hover:bg-[#1ebe5d]",
    "border",
    "border-[#25D366]"
  ].join(" ");

  button.innerHTML = `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.52 3.48A11.94 11.94 0 0 0 12.06 0C5.5 0 .17 5.33.17 11.89c0 2.09.55 4.13 1.6 5.93L0 24l6.34-1.66a11.87 11.87 0 0 0 5.72 1.46h.01c6.56 0 11.89-5.33 11.89-11.89 0-3.18-1.24-6.17-3.44-8.43zM12.07 21.5h-.01a9.6 9.6 0 0 1-4.89-1.34l-.35-.21-3.76.99 1-3.67-.23-.38a9.55 9.55 0 0 1-1.47-5.1c0-5.29 4.31-9.6 9.62-9.6 2.57 0 4.98 1 6.79 2.81a9.53 9.53 0 0 1 2.81 6.79c0 5.3-4.31 9.61-9.51 9.61zm5.27-7.19c-.29-.14-1.71-.84-1.98-.94-.27-.1-.46-.14-.66.14-.19.29-.76.94-.93 1.13-.17.19-.34.22-.63.07-.29-.14-1.22-.45-2.32-1.43-.86-.77-1.44-1.71-1.61-2-.17-.29-.02-.45.13-.59.13-.13.29-.34.43-.51.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.14-.66-1.58-.9-2.17-.24-.57-.48-.49-.66-.5l-.56-.01c-.19 0-.51.07-.77.36-.26.29-1.01.99-1.01 2.41 0 1.42 1.03 2.79 1.18 2.98.14.19 2.04 3.11 4.94 4.36.69.3 1.23.48 1.65.62.69.22 1.32.19 1.82.12.56-.08 1.71-.7 1.95-1.37.24-.67.24-1.25.17-1.37-.07-.12-.26-.19-.55-.34z"></path>
    </svg>
    <span>${LANGUAGE_LABELS[language].whatsapp}</span>
  `;

  button.addEventListener("click", () => {
    if (!form.reportValidity()) {
      return;
    }

    const message = buildContactMessage(form, language);

    const whatsappUrl =
      `https://wa.me/${WHATSAPP_NUMBER}` +
      `?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  });

  return button;
}

function updateContactLinks() {
  document.querySelectorAll("a, div").forEach((element) => {
    const text = element.textContent?.trim();

    if (
      text !== "contact@lsagileworks.com" &&
      text !== CONTACT_EMAIL
    ) {
      return;
    }

    if (element instanceof HTMLAnchorElement) {
      element.textContent = CONTACT_EMAIL;
      element.href = `mailto:${CONTACT_EMAIL}`;
      return;
    }

    element.innerHTML = element.innerHTML.replace(
      "contact@lsagileworks.com",
      `<a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a>`
    );
  });
}

function wireMobileMenu() {
  const menuButton = document.querySelector(
    'button[aria-label="Menu"]'
  );

  const desktopNavigation = document.querySelector("header nav");

  if (
    !(menuButton instanceof HTMLButtonElement) ||
    !(desktopNavigation instanceof HTMLElement)
  ) {
    return;
  }

  menuButton.setAttribute("aria-expanded", "false");

  menuButton.addEventListener("click", () => {
    const isOpen =
      menuButton.getAttribute("aria-expanded") === "true";

    menuButton.setAttribute("aria-expanded", String(!isOpen));

    let mobileNavigation = document.querySelector(
      "[data-mobile-navigation]"
    );

    if (!mobileNavigation) {
      mobileNavigation = desktopNavigation.cloneNode(true);

      mobileNavigation.setAttribute(
        "data-mobile-navigation",
        "true"
      );

      mobileNavigation.className = [
        "md:hidden",
        "border-t",
        "border-border",
        "bg-background",
        "px-6",
        "py-4",
        "flex",
        "flex-col",
        "gap-4"
      ].join(" ");

      document.querySelector("header")?.appendChild(mobileNavigation);
    }

    mobileNavigation.classList.toggle("hidden", isOpen);
  });
}

function initializeApplication() {
  if (!window.LS_BODIES) {
    console.error("Localized content files were not loaded.");
    return;
  }

  mountLanguage(getInitialLanguage());
}

document.addEventListener("DOMContentLoaded", initializeApplication);
