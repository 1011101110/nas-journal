import Link from "next/link";
import ProductRecommendation from "@/components/ProductRecommendation";

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="mb-8">
        <Link href="/" className="text-sage-600 hover:underline text-sm font-sans">← Back to Journal</Link>
      </div>

      <article>
        <h1 className="font-serif text-4xl text-sage-800 mb-8">About This Journal</h1>

        <div className="prose-journal">
          <h2>Who I Am</h2>
          <p>
            I'm an anonymous parent of a child born with Neonatal Abstinence Syndrome.
            I started writing this in a NICU chair when my son was four days old, because I needed to put words somewhere
            and there wasn't anywhere to put them.
          </p>
          <p>
            I'm not a doctor, a therapist, or a researcher. I'm someone who has been through it and kept notes.
            This journal is those notes, organized into something hopefully useful for other parents walking the same path.
          </p>

          <h2>Why Anonymous</h2>
          <p>
            The stigma around opioid use disorder affects children, not just parents. I made a choice to protect my son's
            privacy — he didn't consent to having his story told, and when he's old enough to decide what to share about
            his own history, that decision should be his.
          </p>
          <p>
            I also know that anonymous honesty is more honest. I can write the hard parts without worrying about
            what it looks like.
          </p>

          <h2>What This Is (and Isn't)</h2>
          <p>
            This is personal experience. It is not medical advice. The decisions I made were in consultation with
            our NICU team, developmental pediatrician, therapists, and early intervention coordinators. Your child's
            situation is different from mine.
          </p>
          <p>
            When I cite research, I try to link to primary sources so you can read them yourself.
            I'm representing my understanding of studies written for scientists — I may have gotten things wrong.
            If you find errors, I genuinely want to know.
          </p>

          <h2>Affiliate Disclosure</h2>
          <p>
            I include affiliate links for products I actually use with my son. I earn a small commission if you buy
            through them. I'd recommend these whether or not I got a penny — the only products I mention are ones
            that made a real difference for us.
          </p>
          <p>
            I also always include free alternatives, because not everyone has the budget for specialty products
            and the free version often works just as well.
          </p>
        </div>

        {/* Example product recommendation */}
        <div className="mt-8">
          <h2 className="font-serif text-2xl text-sage-800 mb-4">Things That Made Our Life Better</h2>
          <ProductRecommendation
            name="Hatch Rest Sound Machine"
            take="The app control is actually useful at 2 AM when you don't want to turn on a light. We still use it at age 2."
            link="#"
            freeAlternative="A box fan in the corner of the room — generates consistent white noise and costs nothing."
          />
          <ProductRecommendation
            name="Love to Dream Swaddle UP"
            take="Game-changing for a baby who needed to be swaddled but kept breaking out of traditional swaddles. The arms-up position was something he actually liked."
            link="#"
            freeAlternative="A muslin blanket swaddled very tightly — takes practice but works."
          />
        </div>

        <div className="mt-12 p-6 bg-sage-50 border border-sage-200 rounded-xl font-sans text-warm-600 text-sm">
          <p>
            <strong>If you want to connect:</strong> I don't have contact info here for privacy reasons.
            If you're a parent navigating this and need to talk to someone, the{" "}
            <a href="https://nofas.org" className="text-sage-600 hover:underline" target="_blank" rel="noopener noreferrer">
              NOFAS helpline
            </a>{" "}
            and{" "}
            <a href="https://www.samhsa.gov/find-help/national-helpline" className="text-sage-600 hover:underline" target="_blank" rel="noopener noreferrer">
              SAMHSA's National Helpline
            </a>{" "}
            are good starting points. NAS parent Facebook groups are active and judgment-free.
          </p>
        </div>
      </article>
    </div>
  );
}
