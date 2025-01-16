import LandingHeader from "@/components/landingHeader";
import "@/app/custom_styles.css";

export default function Home() {

  return (
    <main>
      <LandingHeader />
      {/* Login Section */}
      <section className="h-screen flex flex-col justify-center items-center">
        <p className="text-center text-5xl pb-4 md:pb-8 md:text-7xl colonna">chatterBox</p>
        <div className="p-4 md:py-10 w-4/5 mx-auto max-w-64 md:max-w-lg border-2 rounded-sm border-secondary shadow-lg">
          <p className="text-center text-2xl pb-4 md:pb-8 md:text-4xl">Login</p>
          <form className="flex flex-col justify-center items-center">
            <div className="flex flex-col gap-4 md:gap-8 md:text-lg w-full px-2 md:px-20 pb-10">
              <div className="flex flex-col justify-center items-start w-full">
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" id="email" autoComplete="email webauthn" className="border-secondary border-2 rounded-sm px-1 w-full" />
              </div>
              <div className="flex flex-col justify-center items-start w-full">
                <label htmlFor="key">Password:</label>
                <input type="password" name="key" id="key" autoComplete="current-password webauthn" className="border-secondary border-2 rounded-sm px-1 w-full" />
              </div>
            </div>
            <button type="submit" className="bg-primary text-white px-4 py-2 rounded-xl">Login</button>
          </form>
        </div>
        {/* Sign Up Section */}
        <div className="flex flex-col items-center justify-center text-xs md:text-sm pt-5 pb-14">
          <p>Don't have an account?</p>
          <p className="text-blue-500 font-bold pt-2">Sign up</p>
        </div>
      </section>
    </main>
  );
}
