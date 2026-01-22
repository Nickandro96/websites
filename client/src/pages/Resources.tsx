import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { FileText, Download, ExternalLink } from "lucide-react";

export default function Resources() {
  const resources = [
    {
      category: "Guide",
      title: "Checklist Audit ISO 13485:2016",
      description: "Les 50 points de contrôle essentiels pour préparer votre audit de certification sereinement.",
      type: "PDF",
      size: "2.4 MB"
    },
    {
      category: "White Paper",
      title: "Transition vers le Règlement MDR 2017/745",
      description: "Comprendre les impacts majeurs pour les fabricants de classe I et IIa.",
      type: "PDF",
      size: "5.1 MB"
    },
    {
      category: "Outil",
      title: "Matrice de corrélation RABC",
      description: "Un tableau Excel prêt à l'emploi pour votre analyse des risques biocontamination.",
      type: "XLSX",
      size: "1.2 MB"
    }
  ];

  const links = [
    { title: "Règlement (UE) 2017/745 (MDR)", url: "https://eur-lex.europa.eu/" },
    { title: "ISO.org - Normes Management", url: "https://www.iso.org/" },
    { title: "ANSM - Dispositifs Médicaux", url: "https://ansm.sante.fr/" }
  ];

  return (
    <Layout>
      {/* Header */}
      <section className="bg-secondary/30 py-20 border-b border-border">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Ressources & Outils</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Accédez à notre base de connaissances : guides pratiques, modèles de documents et liens utiles pour votre veille réglementaire.
            </p>
          </div>
        </div>
      </section>

      {/* Downloads */}
      <section className="py-24">
        <div className="container">
          <h2 className="text-3xl font-bold text-primary mb-12">Téléchargements Gratuits</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {resources.map((res, idx) => (
              <div key={idx} className="border border-border p-8 hover:shadow-lg transition-shadow bg-white group">
                <div className="flex justify-between items-start mb-6">
                  <div className="bg-secondary/50 p-3 rounded-sm">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-chart-2 bg-chart-2/10 px-2 py-1 rounded-sm">
                    {res.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-blue-600 transition-colors">{res.title}</h3>
                <p className="text-muted-foreground mb-6 text-sm">
                  {res.description}
                </p>
                <div className="flex items-center justify-between pt-6 border-t border-border">
                  <span className="text-xs text-muted-foreground font-mono">{res.type} • {res.size}</span>
                  <Button variant="ghost" size="sm" className="text-primary hover:text-blue-600 p-0 h-auto font-semibold">
                    Télécharger <Download className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* External Links */}
      <section className="py-20 bg-secondary/20">
        <div className="container max-w-4xl">
          <h2 className="text-2xl font-bold text-primary mb-8">Liens Utiles Officiels</h2>
          <div className="space-y-4">
            {links.map((link, idx) => (
              <a 
                key={idx} 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 bg-white border border-border hover:border-primary transition-colors group"
              >
                <span className="font-medium text-primary group-hover:text-blue-600 transition-colors">{link.title}</span>
                <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-blue-600" />
              </a>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
