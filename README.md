# Projekt-Dokumentation

**Gruppenname:** CryptoPioneers  
**Nachnamen:** Kamil, Shaheer

| Datum    | Version | Zusammenfassung                                               |
|----------|---------|---------------------------------------------------------------|
| 10.01.24 | 0.0.1   | Projektinitialisierung und Planung                            |
| 17.01.24 | 0.1.0   | Grundgerüst der Webseite erstellt                             |
| 24.01.24 | 0.2.0   | Entwurf des Verschlüsselungsalgorithmus                       |
| 31.01.24 | 0.3.0   | Implementierung der Verschlüsselungsfunktion                  |
| 07.02.24 | 0.4.0   | Implementierung der Entschlüsselungsfunktion                  |
| 14.02.24 | 0.5.0   | CSS-Styling und Benutzeroberfläche verbessert                 |
| 21.02.24 | 1.0.0   | Abschluss des Projekts, letzte Tests und Dokumentation        |

## 1 Informieren

### 1.1 Ihr Projekt

Unser Projekt ist die Entwicklung einer benutzerfreundlichen Verschlüsselungswebseite.

Ziel dieses Projekts ist es, eine Webanwendung zu erstellen, die es Benutzern ermöglicht, Nachrichten einfach zu verschlüsseln und zu entschlüsseln. Wir möchten lernen, wie man eine interaktive Benutzeroberfläche gestaltet, Grundkenntnisse in Kryptographie anwendet und eine einfache, aber sichere Verschlüsselungsmethode implementiert.

### 1.2 User Stories

| US-№ | Verbindlichkeit | Typ        | Beschreibung                                               |
|------|-----------------|------------|------------------------------------------------------------|
| 1    | Muss            | Funktional | Als Benutzer möchte ich Textnachrichten verschlüsseln können. |
| 2    | Muss            | Funktional | Als Benutzer möchte ich verschlüsselte Nachrichten entschlüsseln können. |
| 3    | Muss            | Funktional | Als Benutzer möchte ich die Verschlüsselungstiefe (Schlüssel) selbst bestimmen können. |
| 4    | Muss            | Funktional | Als Benutzer möchte ich die verschlüsselte Nachricht leicht teilen können. |
| 5    | Kann            | Qualität   | Als Benutzer möchte ich eine einfache und intuitive Benutzeroberfläche. |
| 6    | Kann            | Qualität   | Als Benutzer möchte ich eine visuelle Bestätigung erhalten, wenn die Verschlüsselung oder Entschlüsselung erfolgreich war. |
| 7    | Kann            | Qualität   | Als Benutzer möchte ich Fehlermeldungen erhalten, wenn der Verschlüsselungs- oder Entschlüsselungsprozess fehlschlägt. |
| 8    | Kann            | Rand       | Als Benutzer möchte ich die Webseite auf mobilen Geräten nutzen können. |
| 9    | Kann            | Funktional | Als Benutzer möchte ich mehrere Verschlüsselungsalgorithmen auswählen können. |
| 10   | Kann            | Funktional | Als Benutzer möchte ich eine Historie meiner Aktivitäten einsehen können. |
| 11   | Kann            | Qualität   | Als Benutzer möchte ich die Webseite in verschiedenen Sprachen nutzen können. |
| 12   | Kann            | Funktional | Als Benutzer möchte ich meine verschlüsselten Nachrichten sicher auf der Plattform speichern können. |

### 1.3 Testfälle

| TC-№  | Ausgangslage                     | Eingabe                            | Erwartete Ausgabe                          |
|-------|----------------------------------|------------------------------------|--------------------------------------------|
| 1.1   | Nutzer möchte Nachricht verschlüsseln | "Geheim", Schlüssel: 3             | Verschlüsselte Nachricht mit Schlüssel 3   |
| 2.1   | Nutzer hat eine verschlüsselte Nachricht | Verschlüsselte Nachricht, Schlüssel: 3 | "Geheim"                                   |
| 3.1   | Benutzerzugang zur Schlüsselauswahl | "Test", Schlüssel 5                | Verschlüsselte Nachricht mit Schlüssel 5   |
| 4.1   | Verschlüsselte Nachricht vorhanden | Klick auf "Teilen" Button          | Link/Option zur geteilten Nachricht        |
| 5.1   | Erster Seitenbesuch des Nutzers    | Besuch der Webseite, keine Aktion  | Webseite ist intuitiv und ohne Anleitung nutzbar |
| 6.1   | Verschlüsselung durch Nutzer       | Erfolgreiche Verschlüsselung       | Visuelle Bestätigung der erfolgreichen Aktion |
| 7.1   | Fehler bei Verschlüsselung         | Ungültige Eingabe                  | Fehlermeldung                               |
| 8.1   | Nutzung auf einem Mobilgerät       | Webseite aufrufen                  | Anpassung an Bildschirmgröße, nutzbar       |
| 9.1   | Wahl des Verschlüsselungsalgorithmus| Auswahl eines Algorithmus          | Verschlüsselte Nachricht mit gewähltem Algorithmus |
| 10.1  | Einsicht in Historie               | Klick auf "Historie"               | Anzeige der bisherigen Aktivitäten          |
| 11.1  | Wechsel der Sprache                | Auswahl einer Sprache              | Webseite wird in der gewählten Sprache angezeigt |
| 12.1  | Speichern einer Nachricht          | Verschlüsselte Nachricht speichern | Nachricht sicher auf Plattform gespeichert  |


### 1.4 Diagramme

✍️Fügen Sie hier ein Use Case-Diagramm mit mindestens 10 Anwendungsfällen ein; und einen PAP.

## 2 Planen

| AP-№ | Frist   | Zuständig | Beschreibung                         | geplante Zeit |
|------|---------|-----------|--------------------------------------|---------------|
| 1.A  | 13.01.24| Kamil     | Entwurf und Implementierung der Verschlüsselungsfunktion | 4h |
| 2.A  | 20.01.24| Shaheer   | Entwicklung der Benutzeroberfläche inklusive Responsivität | 5h |
| 3.A  | 27.01.24| Kamil     | Implementierung der Entschlüsselungsfunktion | 4h |
| 4.A  | 03.02.24| Shaheer   | Implementierung der Teilen-Funktionalität | 3h |
| 5.A  | 10.02.24| Kamil     | Test der Anwendung und Anpassungen basierend auf Feedback | 5h |
| 6.A  | 17.02.24| Shaheer   | Finalisierung und Deployment der Webseite | 2h |

**Total geplante Zeit:** 23h

## 3 Entscheiden

- Wir haben uns für eine feste Schlüssellänge von 1-26 entschieden, um die Komplexität für den Benutzer zu reduzieren.
- Für das CSS-Styling entscheiden wir uns für ein responsives Design, um die Nutzung auf mobilen Geräten zu ermöglichen.

## 4 Realisieren

| AP-№ | Datum   | Zuständig | geplante Zeit | tatsächliche Zeit |
|------|---------|-----------|---------------|-------------------|
| 1.A  | 13.01.24| Kamil     | 4h            | 3.5h              |
| 2.A  | 20.01.24| Shaheer   | 5h            | 6h                |
| 3.A  | 27.01.24| Kamil     | 4h            | 4.5h              |
| 4.A  | 03.02.24| Shaheer   | 3h            | 2h                |
| 5.A  | 10.02.24| Kamil     | 5h            | 6h                |
| 6.A  | 17.02.24| Shaheer   | 2h            | 2h                |

## 5 Kontrollieren

### 5.1 Testprotokoll

| TC-№ | Datum   | Resultat    | Tester   |
|------|---------|-------------|----------|
| 1.1  | 27.01.24| Erfolgreich | Kamil    |
| 2.1  | 27.01.24| Erfolgreich | Shaheer  |
| 3.1  | 03.02.24| Erfolgreich | Kamil    |
| 4.1  | 04.02.24| Fehlgeschlagen | Shaheer |
| 5.1  | 05.02.24| Erfolgreich | Kamil    |
| 6.1  | 05.02.24| Warnung    | Shaheer  |
| 7.1  | 06.02.24| Fehlgeschlagen | Kamil    |
| 8.1  | 06.02.24| Erfolgreich | Shaheer  |
| 9.1  | 07.02.24| Erfolgreich | Kamil    |
| 10.1 | 08.02.24| Erfolgreich | Shaheer  |
| 11.1 | 09.02.24| Erfolgreich | Kamil    |
| 12.1 | 10.02.24| Erfolgreich | Shaheer  |


