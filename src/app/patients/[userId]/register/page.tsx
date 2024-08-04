import RegisterForm from "@/components/forms/register-form";
import { getUser } from "@/lib/actions/patient.actions";
import Image from "next/image";
import React from "react";

export default async function Register({
  params: { userId },
}: SearchParamProps) {
  console.log(userId);
  const user = await getUser(userId);
  console.log(user);
  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container">
        <div className="sub-container max-w-[860px] flex-1 flex-col py-10">
          <Image
            src={"/assets/icons/logo-full.svg"}
            alt="logo icon"
            width={1000}
            height={1000}
            className="mb-12 h-10 w-fit"
          />
          <RegisterForm user={user} />
          <div className="text-14-regular mt-20 flex justify-between">
            <p className="justify-items-end text-dark-600 xl:text-left">
              © 2024 Care pulse
            </p>
          </div>
        </div>
      </section>
      <Image
        src={"/assets/images/register-img.png"}
        width={1000}
        height={1000}
        alt="patient"
        className="side-img max-w-[390px]"
      />
    </div>
  );
}
