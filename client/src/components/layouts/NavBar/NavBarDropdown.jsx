import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { ROUTER_PATH } from "../../../constans";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}
const NavBarDropdown = ({ logOut, userId, user }) => {
    return (
        <Menu as="div" className="relative border-l-2">
            <Menu.Button className="flex items-center w-full rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-500 focus:outline-none ">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-red-600 mr-1"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                </svg>
                {user.name}
            </Menu.Button>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="origin-top-right absolute right-0 top-8 mt-2 w-56 rounded-md shadow-lg bg-white/40 ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div>
                        {user?.isAdmin && (
                            <Menu.Item>
                                {({ active }) => (
                                    <NavLink
                                        to={`${ROUTER_PATH.admin}${userId}`}
                                        className={classNames(
                                            active
                                                ? "bg-blue-100/40 "
                                                : "text-gray-700",
                                            "block px-4 py-2.5 text-sm transition-colors duration-200"
                                        )}
                                    >
                                        {"Мои номера"}
                                    </NavLink>
                                )}
                            </Menu.Item>
                        )}

                        <Menu.Item>
                            {({ active }) => (
                                <button
                                    onClick={logOut}
                                    type="button"
                                    className={classNames(
                                        active
                                            ? "bg-blue-100/40"
                                            : "text-gray-700",
                                        "block w-full text-left px-4 py-2.5 text-sm"
                                    )}
                                >
                                    Sign out
                                </button>
                            )}
                        </Menu.Item>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    );
};

NavBarDropdown.propTypes = {
    logOut: PropTypes.func,
    userId: PropTypes.string,
    user: PropTypes.object
};

export default NavBarDropdown;
