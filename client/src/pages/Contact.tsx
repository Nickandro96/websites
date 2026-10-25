import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Send, Check } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

export default function Contact() {
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    const formspreeUrl = import.meta.env.VITE_FORMSPREE_URL;
    if (
      !formspreeUrl ||
      !/^https:\/\/formspree\.io\/f\/[a-zA-Z0-9]+$/.test(formspreeUrl)
    ) {
      setError(
        "Le formulaire est momentanément indisponible. Vous pouvez écrire à infos@n3-conseil.com ou appeler le 07 51 46 66 84.",
      );
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch(formspreeUrl, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
      } else {
        setError(
          "L’envoi n’a pas abouti. Réessayez ou écrivez à infos@n3-conseil.com. Votre message reste affiché dans le formulaire.",
        );
      }
    } catch (error) {
      setError(
        "L’envoi n’a pas abouti. Réessayez ou écrivez à infos@n3-conseil.com. Votre message reste affiché dans le formulaire.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contactez-nous
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              Présentez votre activité, votre échéance et votre principal point
              de blocage. Nick NGANKEP pourra préciser avec vous le périmètre
              d’un accompagnement.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-12">
              <div>
                <h2 className="text-2xl font-bold text-primary mb-6">
                  Nos coordonnées
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-secondary/50 p-3 border border-border">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary mb-1">Téléphone</h3>
                      <a
                        href="tel:+33751466684"
                        className="text-muted-foreground underline underline-offset-4"
                      >
                        07 51 46 66 84
                      </a>
                      <p className="text-sm text-muted-foreground">
                        Vous pouvez laisser un message pour être recontacté.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-secondary/50 p-3 border border-border">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary mb-1">Email</h3>
                      <a
                        href="mailto:infos@n3-conseil.com"
                        className="text-muted-foreground underline underline-offset-4"
                      >
                        infos@n3-conseil.com
                      </a>
                      <p className="text-sm text-muted-foreground">
                        Indiquez votre échéance et vos disponibilités.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-secondary/50 p-3 border border-border">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary mb-1">
                        Localisation
                      </h3>
                      <p className="text-muted-foreground">
                        Intervention sur toute la France
                        <br />
                        Basé à Tours · interventions sur site ou à distance à
                        convenir
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-secondary/20 border border-border">
                <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                  <Clock className="h-5 w-5" /> Premier échange gratuit
                </h3>
                <p className="text-muted-foreground mb-6">
                  Nous proposons un premier entretien téléphonique de 30 minutes
                  pour comprendre vos enjeux et valider la pertinence de notre
                  accompagnement.
                </p>
                <Button
                  variant="outline"
                  asChild
                  className="w-full bg-background hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <a href="mailto:infos@n3-conseil.com?subject=Premier%20%C3%A9change%20N3%20Conseil">
                    Proposer un créneau par e-mail
                  </a>
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 md:p-10 border border-border shadow-sm">
              <h2 className="text-2xl font-bold text-primary mb-6">
                Envoyez-nous un message
              </h2>

              {isSubmitted ? (
                <div
                  role="status"
                  className="bg-green-50 border border-green-200 text-green-800 p-6 text-center animate-in fade-in zoom-in duration-300"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Message envoyé !</h3>
                  <p>
                    Merci de nous avoir contactés. Nous reviendrons vers vous
                    dans les plus brefs délais.
                  </p>
                  <Button
                    variant="link"
                    className="mt-4 text-green-700"
                    onClick={() => setIsSubmitted(false)}
                  >
                    Envoyer un autre message
                  </Button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  aria-describedby="contact-help"
                >
                  <p
                    id="contact-help"
                    className="text-sm text-muted-foreground"
                  >
                    Les champs marqués d’un astérisque sont obligatoires.
                    N’incluez pas de données de santé ni de documents
                    confidentiels dans votre message.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label
                        htmlFor="firstname"
                        className="text-sm font-medium text-primary"
                      >
                        Prénom *
                      </label>
                      <Input
                        id="firstname"
                        name="firstname"
                        required
                        autoComplete="given-name"
                        placeholder="Votre prénom"
                        className="rounded-none bg-secondary/10"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="lastname"
                        className="text-sm font-medium text-primary"
                      >
                        Nom *
                      </label>
                      <Input
                        id="lastname"
                        name="lastname"
                        required
                        autoComplete="family-name"
                        placeholder="Votre nom"
                        className="rounded-none bg-secondary/10"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-primary"
                    >
                      Email professionnel *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      placeholder="vous@entreprise.com"
                      className="rounded-none bg-secondary/10"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="company"
                      className="text-sm font-medium text-primary"
                    >
                      Entreprise
                    </label>
                    <Input
                      id="company"
                      name="company"
                      autoComplete="organization"
                      placeholder="Nom de votre société"
                      className="rounded-none bg-secondary/10"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="subject"
                      className="text-sm font-medium text-primary"
                    >
                      Sujet *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      className="flex h-10 w-full border border-input bg-secondary/10 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 rounded-none"
                    >
                      <option value="">Sélectionnez un sujet</option>
                      <option value="audit">Demande d'audit</option>
                      <option value="conseil">Accompagnement conseil</option>
                      <option value="capa">Non-conformités et CAPA</option>
                      <option value="validation">
                        Qualification et validation IQ/OQ/PQ
                      </option>
                      <option value="distributeur">
                        Obligations MDR du distributeur
                      </option>
                      <option value="formation">Formation</option>
                      <option value="partenariat">Partenariat</option>
                      <option value="autre">Autre demande</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium text-primary"
                    >
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      placeholder="Votre activité, votre besoin, l’échéance et les sites concernés…"
                      className="min-h-[150px] rounded-none bg-secondary/10"
                    />
                  </div>

                  <div className="flex items-start gap-2 text-xs text-muted-foreground">
                    <input
                      type="checkbox"
                      id="consent"
                      name="consent"
                      value="accepted"
                      required
                      className="mt-1"
                    />
                    <label htmlFor="consent">
                      J’accepte que mes données soient traitées pour répondre à
                      ma demande.{" "}
                      <Link
                        href="/confidentialite"
                        className="underline underline-offset-4"
                      >
                        Consulter la politique de confidentialité
                      </Link>
                      .
                    </label>
                  </div>

                  {error && (
                    <p
                      role="alert"
                      className="text-red-700 bg-red-50 border border-red-200 p-4"
                    >
                      {error}
                    </p>
                  )}
                  <Button
                    type="submit"
                    className="w-full rounded-none py-6 text-lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        Envoi en cours...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        Envoyer le message <Send className="h-4 w-4" />
                      </span>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
