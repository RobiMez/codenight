<script lang="ts">
  import Navbar from './_components/Navbar.svelte';
  import { Bug, Chat, ChatDots, Chats, Microphone } from 'phosphor-svelte';
  import ProjectCard from './_components/ProjectCard.svelte';
  import prettyMilliseconds from 'pretty-ms';

  function getTimeUntilNextDayAt8PM(targetDay: number) {
    const now = new Date();
    const dayOfWeek = now.getDay(); // 0 is Sunday, 1 is Monday, etc.
    const daysUntilNextTargetDay = (7 - dayOfWeek + targetDay) % 7;
    const nextTargetDay = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + daysUntilNextTargetDay,
      20,
      0,
      0
    );
    // @ts-ignore
    const timeUntilNextTargetDay = nextTargetDay - now; // in milliseconds

    return timeUntilNextTargetDay;
  }
</script>

<div class="container mx-auto flex min-h-screen max-w-6xl flex-col p-4">
  <Navbar />

  <div class="flex flex-col gap-2 pt-28">
    <h1 class=" text-center text-6xl font-black text-stone-700">Code night</h1>
    <h3 class=" text-center text-lg text-stone-500">"The" community for Ethiopian developers.</h3>
    <p class="px-12 text-center font-light text-stone-700 md:px-36 lg:px-44">
      Codenight is a community of developers that are interested in showcasing their projects. We
      offer a platform and community for developers to display their work publicly and reach
      likeminded people who are interested in growing together.
    </p>
    <a href="https://t.me/CodeNight" class="btn btn-neutral btn-sm mx-auto mt-3 w-fit"
      >Join us on Telegram</a
    >
  </div>
  <section class="flex flex-col gap-6 pt-16">
    <div class="mx-auto flex w-full flex-col items-center justify-center">
      <div
        class="px-auto divider min-w-full max-w-xs
        text-center text-sm font-normal text-stone-700"
      >
        Our Programs
      </div>
      <h2 class=" -mt-4 pb-8 text-center text-4xl font-medium text-stone-600">
        Meet our Community Members
      </h2>
    </div>
    <div>
      <div class="columns-1 justify-around gap-4 gap-y-4 xl:columns-3">
        <ProjectCard
          class="mb-8"
          title="Debugging session"
          description="Ask your questions and get answers from experienced developers."
          dateString="Wednesdays"
          disabledProject
          timeTill={prettyMilliseconds(getTimeUntilNextDayAt8PM(3), { secondsDecimalDigits: 0 })}
        >
          <Bug weight="duotone" size="32" />
          <Bug weight="duotone" size="32" slot="bg-icons" />
        </ProjectCard>
        <ProjectCard
          class="mb-8"
          title="Open mic Discussions"
          description="Join our weekly discussion about the latest technologies and trends."
          dateString="Sundays"
          timeTill={prettyMilliseconds(getTimeUntilNextDayAt8PM(0), { secondsDecimalDigits: 0 })}
        >
          <Microphone weight="duotone" size="32" />
          <Microphone weight="duotone" size="32" slot="bg-icons" />
        </ProjectCard>

        <ProjectCard
          class="mb-8"
          title="Chatting with devs"
          description="Chat with other developers and share your knowledge."
          dateString="24/7"
          timeTill={'Right now!'}
        >
          <Chats weight="duotone" size="32" />
          <ChatDots weight="duotone" size="32" slot="bg-icons" />
        </ProjectCard>
      </div>
    </div>
  </section>
  <section class=" relative xl:my-32 flex flex-row justify-center gap-12 rounded-md bg-stone-700 p-12">
    <div
      class="w-50 hidden absolute xl:block left-60 top-1/2 h-80 -translate-x-1/2 -translate-y-1/2 transform rounded-md bg-stone-100 p-48 text-stone-400"
    >
      Pretend there is <br>a 3d cube here.
    </div>
    <p class="xl:pl-[50%] font-light text-stone-100">
      CodeNight Developers Community is a community of developers who are passionate about coding,
      software development, and technology in general. the community are individuals from diverse
      backgrounds and experiences, all coming together to learn from one another and contribute to
      the world of software development.
    </p>
  </section>
</div>
