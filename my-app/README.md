# React + TypeScript + Next.js Project

## Project Overview

This project is built using React, TypeScript, and Next.js. It features a Star Wars-themed application that displays information about planets, including details about their residents and films. The application is designed to be mobile-friendly and uses various modern libraries and tools for state management, styling, and data fetching.

## Technical Notes

- **Client-Side Components**: The table and search components are client-side components.
- **Pagination**: React Query is used to manage and cache the data for pagination.
- **Server-Side Components**: The details page is a pure server-side component.
- **Shared Search Params**: The search and table components share search parameters.
- **Loading State**: The loading state of the planets hook is exposed via Zustand and used in the search component.
- **Promise.all**: Used to fetch all movies and residents in the details screen (server-side).

## Setup
npm i
npm run dev
make sure youn are at localhost:3000

This project will be done with nextjs and here some libraries to note:
- CSS styling will be with tailwind
- Components will be shadcn
- State managment will be React-Query, load/error animations for the elements.
- Tanstack table for the table, with virtualization

MileStones:

X Get the data to fetch and necessary api calls with types.(All planets and details)
X Routing, as well as Details page UI.
X UI for Main Page, this includes table
X Working Query states for both Home and Details, with its individual requests and queryKeys.
X Search

Optional if i have time:

Images for the planets types.
X Mobile support.