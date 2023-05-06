import React from "react";
import { Tab } from "@headlessui/react";
import SignInForm from "../../Forms/SignInForm";
import SignUpForm from "../../Forms/SignUpForm";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

function AuthLayout() {
    const tabsName = ["Войти", "Зарегистрироваться"];
    return (
        <div className="w-full max-w-md py-16 sm:px-0 mx-auto">
            <Tab.Group>
                <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
                    {tabsName.map((tab) => (
                        <Tab
                            key={tab}
                            className={({ selected }) =>
                                classNames(
                                    "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
                                    "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                                    selected
                                        ? "bg-white shadow"
                                        : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                                )
                            }
                        >
                            {tab}
                        </Tab>
                    ))}
                </Tab.List>
                <Tab.Panels>
                    <Tab.Panel>
                        <SignInForm />
                    </Tab.Panel>
                    <Tab.Panel>
                        <SignUpForm />
                    </Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
        </div>
    );
}

export default AuthLayout;
