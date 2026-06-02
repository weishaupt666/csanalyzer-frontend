CSAnalyzer – Dokumentacja Frontendowa
Opis projektu
Frontend dla aplikacji CSAnalyzer, służącej do analizy statystyk graczy (Steam i FACEIT). Zbudowany w oparciu o architekturę komponentową, zintegrowany z WCF REST API.

Stos technologiczny

Framework: React (Vite)

Język: TypeScript

Style: Tailwind CSS

Routing: React Router (react-router-dom)

Ikony: Lucide React

Struktura plików

src/components/ – izolowane komponenty interfejsu użytkownika (SteamCard.tsx, FaceitCard.tsx).

src/hooks/ – logika biznesowa i zapytania do API (useProfile.ts). Obsługa stanu ładowania i błędów.

src/pages/ – główne widoki aplikacji (Home.tsx, Profile.tsx).

src/types.ts – globalne definicje typów i interfejsów (głównie ProfileData odzwierciedlający odpowiedź z backendu).

Instalacja i uruchomienie

Instalacja zależności:

Bash
npm install
Uruchomienie serwera deweloperskiego:

Bash
npm run dev
Komunikacja z API
Aplikacja domyślnie komunikuje się z lokalnym backendem. Endpoint pobierający dane profilu:
GET http://localhost:59050/CSService.svc/profile/{steamId}
