# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This project recreates a Notion developers documentation page (shown in main.png) using HTML, CSS, JavaScript, and the Infima UI framework. The target design features:

- A clean documentation layout with sidebar navigation
- Header with search functionality
- Main content area with MCP server documentation
- Footer with multiple link sections
- Responsive design with proper spacing and typography

## UI Framework

This project uses **Infima** as the CSS framework. Infima is Facebook's styling framework used in Docusaurus and provides:
- Clean, modern styling components
- Responsive grid system
- Typography utilities
- Color scheme variables
- Component classes for buttons, cards, navigation, etc.

Include Infima via CDN: `https://infima.dev/css/default/main.css`

## Development Structure

- `index.html` - Main HTML structure
- `styles.css` - Custom CSS overrides and additional styling
- `script.js` - JavaScript for interactive functionality
- `main.png` - Reference design image

## Key Design Elements to Implement

1. **Header**: Notion logo, navigation menu (Home, Guides, API Reference, etc.), search bar
2. **Sidebar Navigation**: Collapsible sections (GET STARTED, AGENT APIS, DATA APIS, etc.)
3. **Main Content**: Article layout with proper typography, code highlighting, and interactive elements
4. **Footer**: Multi-column layout with organized links
5. **Interactive Elements**: Search functionality, expandable sidebar sections, "Ask AI" button

## Development Commands

Since this is a static website project:
- Open `index.html` directly in a browser to view
- Use Live Server extension or similar for development
- No build process required for basic HTML/CSS/JS

## Styling Approach

- Use Infima base classes as foundation
- Add custom CSS for Notion-specific styling
- Maintain responsive design principles
- Follow the color scheme and spacing from the reference image