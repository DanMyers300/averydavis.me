import { defineCollection, z } from 'astro:content';

const seoSchema = z.object({
    title: z.string().min(5).max(120).optional(),
    description: z.string().min(15).max(160).optional(),
    image: z
        .object({
            src: z.string(),
            alt: z.string().optional()
        })
        .optional(),
    pageType: z.enum(['website', 'article']).default('website')
});

const pages = defineCollection({
    schema: z.object({
        title: z.string(),
        featureImage: z
            .object({
                src: z.string(),
                alt: z.string().optional(),
                caption: z.string().optional()
            })
            .optional(),
        seo: seoSchema.optional()
    })
});

export const collections = { pages };
