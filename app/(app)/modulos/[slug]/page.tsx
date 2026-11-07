import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ModulePlaceholder } from "@/features/modules/module-placeholder";
import { getMessages } from "@/lib/i18n";
import { MODULE_SLUGS, type ModuleSlug } from "@/types/modules";

interface ModulePageProps {
  params: Promise<{ slug: string }>;
}

function isModuleSlug(value: string): value is ModuleSlug {
  return (MODULE_SLUGS as readonly string[]).includes(value);
}

export const dynamicParams = false;

export function generateStaticParams(): { slug: ModuleSlug }[] {
  return MODULE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ModulePageProps): Promise<Metadata> {
  const { slug } = await params;
  if (!isModuleSlug(slug)) return {};
  return { title: getMessages().modules[slug].title };
}

export default async function ModulePage({ params }: ModulePageProps) {
  const { slug } = await params;
  if (!isModuleSlug(slug)) notFound();

  return <ModulePlaceholder slug={slug} />;
}
