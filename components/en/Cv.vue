<script setup lang="ts">
import { cn } from "@/utils/tailwindHelper";

const CLASS_H2 =
  "text-stone-500 dark:text-stone-400 text-4xl font-thin print:font-light tracking-wider";
// const CLASS_TEXT_SIZE_SECONDARY = "text-base/[2] sm:text-lg/[1.8]";
const CLASS_TEXT_COLOR_SECONDARY = "text-stone-600 dark:text-stone-400";
</script>

<template>
  <UContainer>
    <div
      class="mx-auto flex max-w-4xl grid-cols-[1fr_3fr] flex-col gap-20 lg:grid xl:max-w-7xl xl:grid-cols-[1fr_2fr]"
    >
      <div class="top-0 space-y-10 lg:sticky">
        <h1 class="text-center text-4xl sm:text-5xl">
          <span class="sr-only">Curriculum vitae of </span><span>Henry Wu</span>
        </h1>
        <p
          :class="
            cn(
              CLASS_TEXT_COLOR_SECONDARY,
              'text-center font-serif text-balance italic',
            )
          "
        >
          <span class="whitespace-nowrap">Front-end Developer</span> with
          expertise in
          <span class="whitespace-nowrap">Graphic and Industrial Design</span>
        </p>
        <hr class="w-full border-t border-stone-600 dark:border-stone-400" />
        <ul
          aria-label="Social Media"
          class="flex flex-wrap justify-center gap-x-10 gap-y-1 lg:flex-col lg:justify-start"
        >
          <li>todo</li>
        </ul>
      </div>
      <div class="space-y-20">
        <section aria-labelledby="profile-title" class="space-y-6">
          <h2 id="profile-title" :class="CLASS_H2">Profile</h2>
          <p>
            A well-rounded developer and mentor with 5+ years of experiences,
            skilled in delivering impactful results through technical expertise
            and strategic planning.
          </p>
        </section>
        <section aria-labelledby="projects-title" class="space-y-6">
          <h2 id="projects-title" :class="CLASS_H2">Projects</h2>
          <ul class="space-y-6">
            <li class="italic">(preparing)</li>
          </ul>
        </section>
        <section aria-labelledby="experience-title" class="space-y-6">
          <h2 id="experience-title" :class="CLASS_H2">Experience</h2>
          <ul class="space-y-10">
            <li>
              <section aria-labelledby="experience-item-1" class="space-y-4">
                <ul
                  aria-label="description"
                  class="ml-8 list-outside list-disc space-y-4"
                >
                  <li class="space-y-2">
                    <p>
                      Developed WCAG-compliant web-app for a major airline, and
                      successfully served over 6+ million users by implementing
                      ARIA attributes, semantic HTML, keyboard navigation, and
                      conducting automated and manual accessibility testing.
                    </p>
                  </li>
                  <li class="space-y-2">
                    <p>
                      Engineered a modern UI component library for a major
                      bank's web-view mobile app, streamlining development and
                      improving maintainability by leveraging a headless library
                      and Storybook in collaboration with design and native
                      teams.
                    </p>
                  </li>
                  <li class="space-y-2">
                    <p>
                      Established an efficient DevOps process for website
                      development, achieving a 90% reduction in deployment time
                      by automating the deployment to Ubuntu with Docker and
                      GitHub Actions, and utilizing Traefik as a reverse proxy
                      for optimized traffic management.
                    </p>
                  </li>
                  <li class="space-y-2">
                    <p>
                      Addressed vulnerability concerns for Wagtail CMS by
                      implementing nonce-based CSP configurations and
                      establishing secure coding practices across all projects.
                    </p>
                  </li>
                </ul>
              </section>
            </li>
            <li>
              <section aria-labelledby="experience-item-2" class="space-y-4">
                <ul
                  aria-label="description"
                  class="ml-8 list-outside list-disc space-y-4"
                >
                  <li class="space-y-2">
                    <p>
                      Reduced 60% of IT operational cost by insourcing projects
                      and by introducing best practices to cloud solutions, such
                      as AWS, Azure AD, Exchange Online, or Cloudflare proxy,
                      etc.
                    </p>
                  </li>
                  <li class="space-y-2">
                    <p>
                      Expanded market and increased revenue by 30%, by
                      establishing a team for digital UV printing process.
                    </p>
                  </li>
                  <li class="space-y-2">
                    <p>
                      Gained 10% more profit by implementing ISO 9001 and 5S
                      quality control systems to standardize pricing models and
                      to reduce quality loss.
                    </p>
                  </li>
                </ul>
              </section>
            </li>
            <li>
              <section aria-labelledby="experience-item-3" class="space-y-4">
                <ul
                  aria-label="description"
                  class="ml-8 list-outside list-disc space-y-4"
                >
                  <li class="space-y-2">
                    <p>(internal system)</p>
                  </li>
                </ul>
              </section>
            </li>
            <li>
              <section aria-labelledby="experience-item-4" class="space-y-4">
                <ul
                  aria-label="description"
                  class="ml-8 list-outside list-disc space-y-4"
                >
                  <li class="space-y-2">
                    <p>(internal system)</p>
                  </li>
                </ul>
              </section>
            </li>
          </ul>
        </section>
        <section aria-labelledby="education-title" class="space-y-6">
          <h2 id="education-title" class="{CLASS_H2}">Education</h2>
          <ul class="space-y-6">
            <li>todo</li>
          </ul>
        </section>
      </div>
    </div>
  </UContainer>
</template>
