import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { PageWrapper, SectionWrapper } from "@/components/page-structure";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { data } from "@/data/data";
import Link from "next/link";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

export default function LandingPage() {
  return (
    <PageWrapper className="flex flex-col min-h-dvh space-y-10 bg-green-50 dark:bg-background">
      <HeroSection />
      <AboutSection />
      <WorkSection />
      <EducationSection />
      <TechStackSection />
      <ExpertiseSection />
      <ProjectsSection />
      <MiniToolsSection />
      <ContactSection />
    </PageWrapper>
  );
}

function HeroSection() {
  return (
    <SectionWrapper id="hero">
      <div className="w-full space-y-8">
        <div className="gap-2 flex justify-between">
          <div className="flex-col flex flex-1 space-y-1.5">
            <BlurFadeText
              delay={BLUR_FADE_DELAY}
              className="text-3xl font-bold tracking-tighter sm:text-xl xl:text-6xl/none"
              yOffset={8}
              text={`Hi, I'm ${data.name.split(" ")[0]} 👋`}
            />
            <BlurFadeText className="max-w-[600px] md:text-xl" delay={BLUR_FADE_DELAY} text={data.description} />
          </div>
          <BlurFade delay={BLUR_FADE_DELAY}>
            <Avatar className="size-28 border">
              <AvatarImage alt={data.name} src={data.avatarUrl} />
              <AvatarFallback>{data.initials}</AvatarFallback>
            </Avatar>
          </BlurFade>
        </div>
      </div>
    </SectionWrapper>
  );
}

function AboutSection() {
  return (
    <SectionWrapper id="about">
      <BlurFade delay={BLUR_FADE_DELAY * 3}>
        <h2 className="text-xl font-bold">About</h2>
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 4}>
        <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">{data.summary}</Markdown>
      </BlurFade>
    </SectionWrapper>
  );
}

function WorkSection() {
  return (
    <SectionWrapper id="work">
      <div className="flex min-h-0 flex-col gap-y-3">
        <BlurFade delay={BLUR_FADE_DELAY * 5}>
          <h2 className="text-xl font-bold">Work Experience</h2>
        </BlurFade>
        {data.work.map((work, id) => (
          <BlurFade key={work.company} delay={BLUR_FADE_DELAY * 6 + id * 0.05}>
            <ResumeCard
              key={work.company}
              logoUrl={work.logoUrl}
              altText={work.company}
              title={work.company}
              subtitle={work.title}
              href={work.href}
              badges={work.badges}
              period={`${work.start} - ${work.end ?? "Present"}`}
              description={work.description}
            />
          </BlurFade>
        ))}
      </div>
    </SectionWrapper>
  );
}

function EducationSection() {
  return (
    <SectionWrapper id="education">
      <div className="flex min-h-0 flex-col gap-y-3">
        <BlurFade delay={BLUR_FADE_DELAY * 7}>
          <h2 className="text-xl font-bold">Education</h2>
        </BlurFade>
        {data.education.map((education, id) => (
          <BlurFade key={education.school} delay={BLUR_FADE_DELAY * 8 + id * 0.05}>
            <ResumeCard
              key={education.school}
              href={education.href}
              logoUrl={education.logoUrl}
              altText={education.school}
              title={education.school}
              subtitle={education.degree}
              period={`${education.start} - ${education.end}`}
            />
          </BlurFade>
        ))}
      </div>
    </SectionWrapper>
  );
}

function TechStackSection() {
  return (
    <SectionWrapper id="techStack">
      <div className="flex min-h-0 flex-col gap-y-3">
        <BlurFade delay={BLUR_FADE_DELAY * 9}>
          <h2 className="text-xl font-bold">Tech Stack</h2>
        </BlurFade>
        <div className="flex flex-wrap gap-1">
          {data.techStack.map((item, id) => (
            <BlurFade key={item} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
              <Badge key={item}>{item}</Badge>
            </BlurFade>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

function ExpertiseSection() {
  return (
    <SectionWrapper id="expertise">
      <div className="flex min-h-0 flex-col gap-y-3">
        <BlurFade delay={BLUR_FADE_DELAY * 9}>
          <h2 className="text-xl font-bold">Expertise / Skills</h2>
          <p className="text-sm mt-1">I&apos;ve worked on implementing different kinds of features, below are some of them:</p>
        </BlurFade>
        <div className="flex flex-wrap gap-1">
          {data.expertise.map((item, id) => (
            <BlurFade key={item} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
              <Badge variant="outline" className="bg-background" key={item}>
                {item}
              </Badge>
            </BlurFade>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

function ProjectsSection() {
  return (
    <SectionWrapper id="projects">
      <div className="space-y-12 w-full py-12">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">My Projects</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Check out my latest work</h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                I&apos;ve worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.
              </p>
            </div>
          </div>
        </BlurFade>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
          {data.projects.map((project, id) => (
            <BlurFade key={project.title} delay={BLUR_FADE_DELAY * 12 + id * 0.05}>
              <ProjectCard
                href={project.href}
                key={project.title}
                title={project.title}
                description={project.description}
                dates={project.dates}
                tags={project.technologies}
                image={project.image}
                video={project.video}
                links={project.links}
              />
            </BlurFade>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

function MiniToolsSection() {
  return (
    <SectionWrapper id="mini-tools">
      <div className="space-y-12 w-full py-12">
        <BlurFade delay={BLUR_FADE_DELAY * 13}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">Mini Tools</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">I like building things</h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                During my time in university and after, I used to spend my time building small scripts/tools to help me with my daily tasks.
              </p>
            </div>
          </div>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 14}>
          <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
            {data.miniTools.map((tool, id) => (
              <BlurFade key={tool.title + tool.date} delay={BLUR_FADE_DELAY * 15 + id * 0.05}>
                <HackathonCard title={tool.title} description={tool.description} location={tool.tag} dates={tool.date} image={tool.image} links={tool.links} />
              </BlurFade>
            ))}
          </ul>
        </BlurFade>
      </div>
    </SectionWrapper>
  );
}

function HackathonsSection() {
  return (
    <SectionWrapper id="hackathons">
      <div className="space-y-12 w-full py-12">
        <BlurFade delay={BLUR_FADE_DELAY * 13}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">Hackathons</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">I like building things</h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                During my time in university, I attended {data.hackathons.length}+ hackathons. People from around the country would come together and build
                incredible things in 2-3 days. It was eye-opening to see the endless possibilities brought to life by a group of motivated and passionate
                individuals.
              </p>
            </div>
          </div>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 14}>
          <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
            {data.hackathons.map((project, id) => (
              <BlurFade key={project.title + project.dates} delay={BLUR_FADE_DELAY * 15 + id * 0.05}>
                <HackathonCard
                  title={project.title}
                  description={project.description}
                  location={project.location}
                  dates={project.dates}
                  image={project.image}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </ul>
        </BlurFade>
      </div>
    </SectionWrapper>
  );
}

function ContactSection() {
  return (
    <SectionWrapper id="contact">
      <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
        <BlurFade delay={BLUR_FADE_DELAY * 16}>
          <div className="space-y-3">
            <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">Contact</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get in Touch</h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Want to chat? Just shoot me a dm{" "}
              <Link href={data.contact.social.X.url} className="text-blue-500 hover:underline">
                with a direct question on twitter
              </Link>{" "}
              and I&apos;ll respond whenever I can. Or you can just send me an{" "}
              <Link href={`mailto:${data.contact.email}`} className="text-blue-500 hover:underline">
                email.
              </Link>
            </p>
          </div>
        </BlurFade>
      </div>
    </SectionWrapper>
  );
}
