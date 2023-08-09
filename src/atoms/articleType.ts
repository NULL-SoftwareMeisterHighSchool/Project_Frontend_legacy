import { atom } from "recoil";

export const articleTypeAtom = atom({
    key: 'articleTypeAtom',
    default:"GENERAL"
});

export const profileIdAtom = atom({
    key: "profileIdAtom",
    default:""
});