
import React, { useState } from 'react';
import { Tooltip } from '@/components/Tooltip/Tooltip';


interface CodeBlockProps {
  title: string;
  description: string;
  code: string;
  children: React.ReactNode;
}

// Reusable card component with "View Code" toggle
const ExampleCard = ({ title, description, code, children }: CodeBlockProps) => {
  const [showCode, setShowCode] = useState(false);

  return (
    <div className="border rounded-xl bg-white shadow-sm overflow-hidden space-y-0">
      <div className="p-6 pb-4">
        <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
        <p className="text-sm text-slate-500 mt-1">{description}</p>
      </div>

      {/* Action / Toggle Bar */}
      <div className="flex items-center justify-between px-6 py-2 bg-slate-50 border-y border-slate-100">
        <span className="text-xs font-medium text-slate-400">Preview</span>
        <button
          onClick={() => setShowCode(!showCode)}
          className="px-3 py-1 text-xs font-mono font-medium rounded-md border bg-white hover:bg-slate-100 text-slate-700 transition"
        >
          {showCode ? "</> Hide Code" : "</> View Code"}
        </button>
      </div>

      {/* Preview Container */}
      <div className="p-8 flex items-center justify-center gap-4 bg-slate-50/50 min-h-[120px]">
        {children}
      </div>

      {/* Expandable Code Block */}
      {showCode && (
        <div className="border-t bg-slate-900 p-4 overflow-x-auto">
          <pre className="text-xs font-mono text-slate-100">
            <code>{code}</code>
          </pre>
        </div>
      )}
    </div>
  );
};

export default function TooltipPage() {
  return (
    <div className="max-w-4xl space-y-8 pb-16">
      <div>
        <h1 className="text-3xl font-bold">Tooltip</h1>
        <p className="mt-2 text-slate-600">
          A popup displaying informative text when hovering, clicking, or focusing an element.
        </p>
      </div>

      {/* 1. Basic Usage */}
      <ExampleCard
        title="1. Basic Usage"
        description="Standard tooltip on button hover."
        code={`<Tooltip content="Default tooltip">
  <button className="px-4 py-2 bg-indigo-600 text-white rounded-md">Hover Me</button>
</Tooltip>`}
      >
        <Tooltip content="Default tooltip">
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-md">Hover Me</button>
        </Tooltip>
      </ExampleCard>

      {/* 2. Positions */}
      <ExampleCard
        title="2. Positions"
        description="Supports top, right, bottom, and left placements."
        code={`<Tooltip content="Top" position="top"><button>Top</button></Tooltip>
<Tooltip content="Right" position="right"><button>Right</button></Tooltip>
<Tooltip content="Bottom" position="bottom"><button>Bottom</button></Tooltip>
<Tooltip content="Left" position="left"><button>Left</button></Tooltip>`}
      >
        <Tooltip content="Top" position="top">
          <button className="px-3 py-1.5 border rounded bg-white">Top</button>
        </Tooltip>
        <Tooltip content="Right" position="right">
          <button className="px-3 py-1.5 border rounded bg-white">Right</button>
        </Tooltip>
        <Tooltip content="Bottom" position="bottom">
          <button className="px-3 py-1.5 border rounded bg-white">Bottom</button>
        </Tooltip>
        <Tooltip content="Left" position="left">
          <button className="px-3 py-1.5 border rounded bg-white">Left</button>
        </Tooltip>
      </ExampleCard>

      {/* 3. Action Buttons (Add / Delete / Edit) */}
      <ExampleCard
        title="3. Icon Actions"
        description="Common usage on UI action buttons like Add, Edit, or Delete."
        code={`<Tooltip content="Add item">
  <button className="p-2 bg-emerald-600 text-white rounded-md">+</button>
</Tooltip>
<Tooltip content="Delete item">
  <button className="p-2 bg-rose-600 text-white rounded-md">🗑</button>
</Tooltip>`}
      >
        <Tooltip content="Add new item">
          <button className="px-3 py-1.5 bg-emerald-600 text-white rounded-md font-bold">+</button>
        </Tooltip>
        <Tooltip content="Delete item">
          <button className="px-3 py-1.5 bg-rose-600 text-white rounded-md">Delete 🗑</button>
        </Tooltip>
      </ExampleCard>

      {/* 4. Custom Delay */}
      <ExampleCard
        title="4. Custom Delay"
        description="Delay appearance before triggering showing/hiding."
        code={`<Tooltip content="Delayed tooltip" delay={500}>
  <button className="px-4 py-2 border bg-white rounded-md">500ms Delay</button>
</Tooltip>`}
      >
        <Tooltip content="Delayed 500ms" delay={500}>
          <button className="px-4 py-2 border bg-white rounded-md">Hover (500ms Delay)</button>
        </Tooltip>
      </ExampleCard>

      {/* 5. Variants (Dark vs Light) */}
      <ExampleCard
        title="5. Theme Variants"
        description="Dark or Light color styles."
        code={`<Tooltip content="Dark theme" variant="dark"><button>Dark</button></Tooltip>
<Tooltip content="Light theme" variant="light"><button>Light</button></Tooltip>`}
      >
        <Tooltip content="Dark Theme" variant="dark">
          <button className="px-4 py-2 bg-slate-800 text-white rounded-md">Dark</button>
        </Tooltip>
        <Tooltip content="Light Theme" variant="light">
          <button className="px-4 py-2 border bg-white rounded-md">Light</button>
        </Tooltip>
      </ExampleCard>

      {/* 6. Rich Content / JSX Elements */}
      <ExampleCard
        title="6. Rich JSX Content"
        description="Embed HTML elements or icons inside tooltips."
        code={`<Tooltip content={
  <div className="flex items-center gap-1">
    <span>🔥</span> <strong>Pro Feature</strong>
  </div>
}>
  <button className="px-4 py-2 bg-purple-600 text-white rounded-md">Upgrade</button>
</Tooltip>`}
      >
        <Tooltip
          content={
            <div className="flex items-center gap-1 font-medium">
              <span>🔥</span> <span>Pro Feature</span>
            </div>
          }
        >
          <button className="px-4 py-2 bg-purple-600 text-white rounded-md">Hover Pro</button>
        </Tooltip>
      </ExampleCard>

      {/* 7. Click Trigger */}
      <ExampleCard
        title="7. Click Trigger"
        description="Triggers tooltip visibility on click instead of hover."
        code={`<Tooltip content="Clicked tooltip" trigger="click">
  <button className="px-4 py-2 border bg-white rounded-md">Click Me</button>
</Tooltip>`}
      >
        <Tooltip content="Clicked tooltip" trigger="click">
          <button className="px-4 py-2 border bg-white rounded-md">Click Me</button>
        </Tooltip>
      </ExampleCard>

      {/* 8. Text Link Tooltip */}
      <ExampleCard
        title="8. Inline Text Link"
        description="Attach tooltip to inline contextual links or glossary terms."
        code={`<p>
  Learn more about 
  <Tooltip content="A fast JavaScript bundler">
    <span className="text-indigo-600 underline cursor-pointer ml-1">Vite</span>
  </Tooltip>.
</p>`}
      >
        <p className="text-sm text-slate-700">
          Learn more about{" "}
          <Tooltip content="A fast JavaScript bundler">
            <span className="text-indigo-600 font-semibold underline cursor-pointer">Vite</span>
          </Tooltip>{" "}
          integration.
        </p>
      </ExampleCard>

      {/* 9. Disabled Element Handling */}
      <ExampleCard
        title="9. On Disabled Elements"
        description="Tooltip shown over disabled actions using a wrapper span."
        code={`<Tooltip content="You need admin rights to perform this action">
  <span className="inline-block cursor-not-allowed">
    <button disabled className="px-4 py-2 bg-slate-300 text-slate-500 rounded-md pointer-events-none">
      Disabled Action
    </button>
  </span>
</Tooltip>`}
      >
        <Tooltip content="You need admin rights for this action">
          <span className="inline-block cursor-not-allowed">
            <button disabled className="px-4 py-2 bg-slate-200 text-slate-400 rounded-md pointer-events-none">
              Disabled
            </button>
          </span>
        </Tooltip>
      </ExampleCard>

      {/* 10. Arrow Pointer Customization */}
      <ExampleCard
        title="10. Arrow Pointer"
        description="Tooltip rendered with a small pointer arrow."
        code={`<Tooltip content="Tooltip with arrow" showArrow={true}>
  <button className="px-4 py-2 bg-indigo-600 text-white rounded-md">With Arrow</button>
</Tooltip>`}
      >
        <Tooltip content="Tooltip with arrow" showArrow={true}>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-md">With Arrow</button>
        </Tooltip>
      </ExampleCard>
    </div>
  );
}