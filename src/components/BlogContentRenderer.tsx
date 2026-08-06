"use client";

import React from "react";

/**
 * Renders blog post content that uses a simple markdown-like syntax.
 * Supports: ## headings, **bold**, bullet lists (- ), tables (|), and paragraphs.
 */
export default function BlogContentRenderer({ content }: { content: string }) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;
  let key = 0;

  while (i < lines.length) {
    const line = lines[i].trimEnd();

    // Skip empty lines
    if (line.trim() === "") {
      i++;
      continue;
    }

    // Table block: starts with |
    if (line.trim().startsWith("|")) {
      const tableLines: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith("|")) {
        tableLines.push(lines[i].trim());
        i++;
      }
      elements.push(<TableBlock key={key++} lines={tableLines} />);
      continue;
    }

    // Heading: ## 
    if (line.startsWith("## ")) {
      elements.push(
        <h2
          key={key++}
          className="font-display font-bold text-xl sm:text-2xl text-slate-900 tracking-tight mt-8 mb-3"
        >
          {renderInline(line.slice(3))}
        </h2>
      );
      i++;
      continue;
    }

    // Bullet list item: - 
    if (line.trim().startsWith("- ")) {
      const listItems: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith("- ")) {
        listItems.push(lines[i].trim().slice(2));
        i++;
      }
      elements.push(
        <ul key={key++} className="space-y-2 pl-1 my-4">
          {listItems.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2 text-slate-700 text-sm sm:text-base leading-relaxed">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-500 flex-shrink-0" />
              <span>{renderInline(item)}</span>
            </li>
          ))}
        </ul>
      );
      continue;
    }

    // Regular paragraph
    elements.push(
      <p key={key++} className="text-slate-700 text-sm sm:text-base leading-relaxed">
        {renderInline(line)}
      </p>
    );
    i++;
  }

  return <>{elements}</>;
}

/** Render inline **bold** markers */
function renderInline(text: string): React.ReactNode {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, idx) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={idx} className="font-semibold text-slate-900">
          {part.slice(2, -2)}
        </strong>
      );
    }
    // Handle em-dash
    return part;
  });
}

/** Render a markdown-style table */
function TableBlock({ lines }: { lines: string[] }) {
  // Parse header, separator, and body rows
  const parseRow = (line: string) =>
    line
      .split("|")
      .map((cell) => cell.trim())
      .filter((cell) => cell.length > 0);

  if (lines.length < 3) return null;

  const header = parseRow(lines[0]);
  // lines[1] is the separator (|---|---|)
  const bodyRows = lines.slice(2).map(parseRow);

  return (
    <div className="overflow-x-auto my-6 rounded-2xl border border-slate-200 shadow-sm">
      <table className="w-full text-sm text-left">
        <thead>
          <tr className="bg-slate-50 border-b border-slate-200">
            {header.map((cell, idx) => (
              <th
                key={idx}
                className="px-4 py-3 font-display font-bold text-slate-700 text-xs uppercase tracking-wider"
              >
                {renderInline(cell)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {bodyRows.map((row, rowIdx) => (
            <tr
              key={rowIdx}
              className={`border-b border-slate-100 last:border-b-0 ${
                rowIdx % 2 === 0 ? "bg-white" : "bg-slate-50/50"
              }`}
            >
              {row.map((cell, cellIdx) => (
                <td key={cellIdx} className="px-4 py-3 text-slate-600 leading-relaxed">
                  {renderInline(cell)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
