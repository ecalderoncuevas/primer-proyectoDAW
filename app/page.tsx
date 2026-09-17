import { ShaderBackground } from "@/components/ui/adisyon-shader"

export default function Page() {
  return (
    <>
      <div className="relative min-h-[450px] h-screen w-screen overflow-hidden bg-transparent">
        <ShaderBackground className="absolute inset-0 -z-10" />
        <div className="mx-auto flex h-full w-full max-w-[1200px] items-center justify-center bg-transparent p-8 text-center">
          <p className="text-center text-[30px] leading-none">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae
            velit at purus faucibus laoreet. Integer euismod, massa sed
            ultrices posuere, nunc lacus tincidunt justo, vitae tristique nunc
            nunc non ipsum. Donec posuere, libero sed varius sagittis, erat
            magna malesuada lorem, eget placerat lectus turpis quis justo.
            Curabitur aliquet, nisl non pretium elementum, augue ipsum luctus
            metus, vitae volutpat mi libero a nisi. Vestibulum ante ipsum
            primis in faucibus orci luctus et ultrices posuere cubilia curae;
            Praesent pellentesque erat vel sapien sollicitudin, ac fermentum
            nunc ultrices. Aliquam erat volutpat, semper.
          </p>
        </div>
      </div>
      
      <section className="min-h-[450px] h-[50vh] w-screen bg-[#064e3b]" />
      <section className="min-h-[450px] h-[50vh] w-screen bg-[#083344]" />
    </>
  )
}
