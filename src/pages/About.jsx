import InfoCard from "../Components/InfoCard";
import Timeline from "../Components/Timeline";

export default function About() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-5xl mx-auto space-y-20">

        {/* ABOUT ME */}
        <div>
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-gray-600 leading-relaxed">
            I am a calm and curious person who enjoys learning new things
            and understanding how ideas work in real life.
            <br /><br />
            I believe growth takes time, patience, and consistency.
            I like keeping things simple, clear, and meaningful.
          </p>
        </div>

        {/* PERSONALITY / MINDSET / VALUES */}
        <div className="grid md:grid-cols-3 gap-8">
          <InfoCard
            title="Personality"
            items={[
              "Calm and patient",
              "Curious by nature",
              "Focused and disciplined",
              "Honest and consistent",
            ]}
          />

          <InfoCard
            title="Mindset"
            items={[
              "Growth over perfection",
              "Learning from mistakes",
              "Step-by-step progress",
              "Positive thinking",
            ]}
          />

          <InfoCard
            title="Values"
            items={[
              "Simplicity",
              "Consistency",
              "Honesty",
              "Continuous learning",
            ]}
          />
        </div>

        {/* EDUCATION / JOURNEY */}
        <div>
          <h2 className="text-3xl font-bold mb-10">Education & Journey</h2>

          <Timeline
            title="School"
            year="2016 – 2021"
            desc="Built strong learning foundations, discipline, and curiosity."
          />

          <Timeline
            title="College"
            desc="Explored new subjects and developed independent learning habits."
          />

          <Timeline
            title="Present College"
            desc="Continuing my learning journey with focus and steady improvement."
          />
        </div>

        {/* WHAT I ENJOY */}
        <div>
          <h2 className="text-3xl font-bold mb-10">What I Enjoy</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <InfoCard
              title="Interests"
              items={[
                "Learning new concepts",
                "Exploring ideas",
                "Problem solving",
                "Creating simple things",
              ]}
            />

            <InfoCard
              title="Habits"
              items={[
                "Daily learning",
                "Regular practice",
                "Staying organized",
                "Self-reflection",
              ]}
            />

            <InfoCard
              title="Learning Style"
              items={[
                "Learning by doing",
                "Breaking into small steps",
                "Repeating until clear",
                "Practice-focused",
              ]}
            />
          </div>
        </div>

        {/* VALUES & BELIEFS */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Values & Beliefs</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Consistency matters more than speed</li>
            <li>Small daily progress leads to big results</li>
            <li>Learning never truly ends</li>
            <li>Simplicity makes things better</li>
            <li>Patience brings growth</li>
          </ul>
        </div>

        {/* QUOTE */}
        <div className="text-center">
          <p className="italic text-xl text-gray-500">
            "Small steps every day lead to big changes."
          </p>
        </div>

      </div>
    </section>
  );
}
