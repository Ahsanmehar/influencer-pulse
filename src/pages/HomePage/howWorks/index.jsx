import WorkCard from "./compoents/WorksCard";
import works from "./worksData";

function HowWorks() {
  return (
    <section className="bg-gray-20 py-16">
      <div className="container mx-auto">
        <div className="div">
          <h2 className="text-3xl text-black font-bold text-center mb-8">
            How <span className="text-[#9335b6]">It Works</span>
          </h2>
          <p className="text-base text-gray-600 font-normal mt-4 max-w-2xl mx-auto leading-tight text-center">
            Our streamlined process makes it easy to connect, collaborate, and
            create impactful campaigns.
          </p>
        </div>

        <div className="cards flex flex-col md:flex-row items-start md:items-stretch justify-center gap-6 md:gap-8 mt-10">
          {works.map((w, idx) => (
            <div key={w.id} className="flex-1 flex justify-center">
              <WorkCard {...w} isLast={idx === works.length - 1} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowWorks;
