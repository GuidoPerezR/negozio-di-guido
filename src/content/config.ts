import { defineCollection, z } from "astro:content";

const cars = defineCollection({ 
    schema: z.object({
        name: z.string(),
        brand: z.string(),
        img: z.string(),
        size:z.number(),
        description: z.string(),
        buy: z.object({
            mexico: z.string().url(),
            usa: z.string().url(),
        })
    })
});

export const collections = { cars }