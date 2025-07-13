export default function MissionValuesVision() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Our Mission, Values, and Vision
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              At Novex Holding Group, we are driven by a commitment to innovation, excellence, and sustainable growth.
              Our diverse portfolio reflects our dedication to transforming industries and creating lasting value for
              our stakeholders.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 sm:grid-cols-2 lg:grid-cols-3">
          <div className="grid gap-1">
            <h3 className="text-lg font-bold">Our Mission</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              To empower businesses and communities through innovative solutions, fostering growth and creating a
              positive impact across all our ventures.
            </p>
          </div>
          <div className="grid gap-1">
            <h3 className="text-lg font-bold">Our Values</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Integrity, Innovation, Excellence, Collaboration, and Sustainability are the pillars that guide our
              decisions and actions.
            </p>
          </div>
          <div className="grid gap-1">
            <h3 className="text-lg font-bold">Our Vision</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              To be a global leader in diversified industries, recognized for our pioneering spirit, ethical practices,
              and unwavering commitment to quality.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
