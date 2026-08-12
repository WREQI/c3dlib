import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function CadSignInPage() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValidEmail) return;
    toast.success('Signing in...');
    setTimeout(() => navigate('/cad/documents'), 600);
  };

  return (
    <div className="flex h-screen w-full overflow-hidden bg-white">
      {/* Left: Sign-in form */}
      <div className="flex w-1/2 flex-col items-center justify-center px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex w-full max-w-sm flex-col items-center"
        >
          {/* Logo */}
          <div className="mb-8 flex items-center gap-2">
            <svg viewBox="0 0 24 24" className="h-9 w-9" fill="none">
              <path d="M12 2L2 7.5v9L12 22l10-5.5v-9L12 2z" stroke="#222" strokeWidth="1.5" fill="#222" />
              <path d="M12 6L6 9.5v5L12 18l6-3.5v-5L12 6z" fill="white" />
              <path d="M12 9.5L9 11.25v1.5L12 14.5l3-1.75v-1.5L12 9.5z" fill="#222" />
            </svg>
            <div className="flex flex-col leading-tight">
              <span className="text-xl font-normal text-[#222]">onshape</span>
              <span className="text-[10px] tracking-wider text-[#5f6368]">by ptc</span>
            </div>
          </div>

          {/* Email form */}
          <form onSubmit={handleSubmit} className="w-full space-y-4">
            <div className="relative">
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="h-11 rounded-sm border border-[#1a73e8] px-3 text-base text-[#333] focus-visible:ring-0 focus-visible:ring-offset-0"
                autoFocus
              />
            </div>

            <Button
              type="submit"
              disabled={!isValidEmail}
              className="h-10 w-full rounded-sm bg-[#1a73e8] text-sm font-medium text-white hover:bg-[#1557b0] disabled:bg-[#a8c7fa] disabled:text-white disabled:opacity-100"
            >
              Continue
            </Button>
          </form>

          {/* Divider */}
          <div className="my-6 flex w-full items-center gap-3">
            <div className="h-px flex-1 bg-[#e0e0e0]" />
          </div>

          {/* Bottom links */}
          <div className="flex w-full items-center justify-between text-xs text-[#1a73e8]">
            <button
              className="hover:underline"
              onClick={() => toast.info('Opening terms...')}
            >
              Onshape Terms &amp; Privacy Policy
            </button>
          </div>

          <div className="mt-3 w-full text-right text-xs text-[#5f6368]">
            Don&apos;t have an account?{' '}
            <button
              className="font-medium text-[#1a73e8] hover:underline"
              onClick={() => navigate('/pricing')}
            >
              Sign up
            </button>
          </div>
        </motion.div>
      </div>

      {/* Right: Visual showcase */}
      <div className="relative hidden w-1/2 items-center justify-center overflow-hidden bg-gradient-to-br from-[#f8f9fa] to-[#e8f0fe] lg:flex">
        {/* Code background */}
        <div className="pointer-events-none absolute inset-0 opacity-20">
          <pre className="h-full w-full p-12 font-mono text-[11px] leading-5 text-[#1a73e8]">
{`FeatureScript 2909;
import(path : "onshape/std/common.fs", version : "...");

// ===== Enums =====

TubePassConfig {
  annotation { "Name" : "1-pass straight" } ONE_PASS,
  annotation { "Name" : "2-pass (with pass partition)" } TWO_PASS,
}

FlowArrangement {
  annotation { "Name" : "Counter-flow" } COUNTER_FLOW,
  annotation { "Name" : "Parallel-flow" } PARALLEL_FLOW,
}

TubeSheetType {
  annotation { "Name" : "Flat tubesheet + cylindrical shell" } FLAT,
  annotation { "Name" : "Hemispherical head" } HEMISPHERICAL,
}

PitchPattern {
  annotation { "Name" : "Square (90 deg)" } SQUARE,
  annotation { "Name" : "Triangular (30 deg)" } TRIANGULAR,
}

export enum FluidType {
  annotation { "Name" : "Water (50 C)" } WATER,
  annotation { "Name" : "Light oil" } OIL,
  annotation { "Name" : "Air (50 C)" } AIR,
  annotation { "Name" : "Custom" } CUSTOM,
}

export enum HotSide {
  annotation { "Name" : "Tube side" } TUBE_SIDE,
  annotation { "Name" : "Shell side" } SHELL_SIDE,
}

export enum ShellNps {
  annotation { "Name" : "NPS 6 (DN150)" } NPS_6,
  annotation { "Name" : "NPS 8 (DN200)" } NPS_8,
  annotation { "Name" : "NPS 10 (DN250)" } NPS_10,
  annotation { "Name" : "NPS 12 (DN300)" } NPS_12,
  annotation { "Name" : "NPS 14 (DN350)" } NPS_14,
  annotation { "Name" : "NPS 16 (DN400)" } NPS_16,
}

export enum NozzleNps {
  annotation { "Name" : "NPS 2 (DN50)" } NPS_2,
  annotation { "Name" : "NPS 3 (DN80)" } NPS_3,
  annotation { "Name" : "NPS 4 (DN100)" } NPS_4,
}

`}
          </pre>
        </div>

        {/* 3D Heat Exchanger visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative z-10"
        >
          <svg viewBox="0 0 600 350" className="h-auto w-[540px]">
            <defs>
              <linearGradient id="shellGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#a0a8b0" />
                <stop offset="50%" stopColor="#6b7280" />
                <stop offset="100%" stopColor="#4b5563" />
              </linearGradient>
              <linearGradient id="flangeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#7a828a" />
                <stop offset="100%" stopColor="#4b5563" />
              </linearGradient>
              <linearGradient id="tubeRed" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#c44536" />
                <stop offset="100%" stopColor="#a33525" />
              </linearGradient>
              <linearGradient id="tubeBlue" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#2563eb" />
                <stop offset="100%" stopColor="#1d4ed8" />
              </linearGradient>
            </defs>

            {/* Main shell cylinder */}
            <ellipse cx="100" cy="175" rx="30" ry="70" fill="url(#shellGrad)" opacity="0.95" />
            <rect x="100" y="105" width="400" height="140" fill="url(#shellGrad)" opacity="0.9" />
            <ellipse cx="500" cy="175" rx="30" ry="70" fill="#5a6268" opacity="0.7" />

            {/* Left flange */}
            <ellipse cx="95" cy="175" rx="10" ry="78" fill="url(#flangeGrad)" />
            {/* Right flange */}
            <ellipse cx="505" cy="175" rx="10" ry="78" fill="url(#flangeGrad)" />

            {/* Flange bolt holes - left */}
            {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
              const angle = (i * Math.PI * 2) / 8;
              const x = 92 + Math.cos(angle) * 6;
              const y = 175 + Math.sin(angle) * 65;
              return <circle key={`lb-${i}`} cx={x} cy={y} r="2.5" fill="#2d3436" />;
            })}
            {/* Flange bolt holes - right */}
            {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
              const angle = (i * Math.PI * 2) / 8;
              const x = 508 + Math.cos(angle) * 6;
              const y = 175 + Math.sin(angle) * 65;
              return <circle key={`rb-${i}`} cx={x} cy={y} r="2.5" fill="#2d3436" />;
            })}

            {/* Tube sheet (left, visible through opening) */}
            <ellipse cx="90" cy="175" rx="4" ry="62" fill="#c44536" opacity="0.85" />
            {/* Tube pattern dots */}
            {Array.from({ length: 6 }).map((_, row) =>
              Array.from({ length: 3 }).map((_, col) => {
                const y = 120 + row * 22 + (col % 2) * 11;
                const x = 88 - col * 2;
                if (y > 115 && y < 235) {
                  return <circle key={`t-${row}-${col}`} cx={x} cy={y} r="1.5" fill="#8b2e20" />;
                }
                return null;
              })
            )}

            {/* Nozzles on top */}
            <rect x="200" y="75" width="18" height="30" rx="3" fill="url(#tubeRed)" />
            <ellipse cx="209" cy="75" rx="12" ry="5" fill="#c44536" />
            <ellipse cx="209" cy="72" rx="12" ry="4" fill="#7a828a" />
            {/* Nozzle bolts red */}
            {[0, 1, 2, 3].map((i) => (
              <circle key={`rn-${i}`} cx={199 + i * 7} cy="74" r="1" fill="#2d3436" />
            ))}

            <rect x="310" y="65" width="18" height="40" rx="3" fill="url(#tubeBlue)" />
            <ellipse cx="319" cy="65" rx="12" ry="5" fill="#2563eb" />
            <ellipse cx="319" cy="62" rx="12" ry="4" fill="#7a828a" />
            {[0, 1, 2, 3].map((i) => (
              <circle key={`bn-${i}`} cx={309 + i * 7} cy="64" r="1" fill="#2d3436" />
            ))}

            <rect x="420" y="60" width="22" height="45" rx="3" fill="url(#tubeRed)" />
            <ellipse cx="431" cy="60" rx="15" ry="6" fill="#c44536" />
            <ellipse cx="431" cy="57" rx="15" ry="5" fill="#7a828a" />
            {[0, 1, 2, 3, 4].map((i) => (
              <circle key={`tn-${i}`} cx={419 + i * 6} cy="59" r="1" fill="#2d3436" />
            ))}

            {/* Internal baffle plates (visible through shell) */}
            <rect x="180" y="110" width="3" height="100" fill="#7a828a" opacity="0.3" />
            <rect x="250" y="140" width="3" height="100" fill="#7a828a" opacity="0.3" />
            <rect x="320" y="110" width="3" height="100" fill="#7a828a" opacity="0.3" />
            <rect x="390" y="140" width="3" height="100" fill="#7a828a" opacity="0.3" />
            <rect x="450" y="110" width="3" height="100" fill="#7a828a" opacity="0.3" />
          </svg>
        </motion.div>

        {/* Bottom caption */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-center">
          <div className="text-sm font-semibold text-[#333]">Shell &amp; Tube Heat Exchanger</div>
          <div className="mt-0.5 text-xs text-[#5f6368]">AI Driven with Onshape FeatureScript MCP</div>
          <div className="mt-3 flex items-center justify-center gap-2">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
              <path d="M12 2L2 7.5v9L12 22l10-5.5v-9L12 2z" stroke="#222" strokeWidth="1.5" fill="#222" />
              <path d="M12 6L6 9.5v5L12 18l6-3.5v-5L12 6z" fill="white" />
              <path d="M12 9.5L9 11.25v1.5L12 14.5l3-1.75v-1.5L12 9.5z" fill="#222" />
            </svg>
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-medium text-[#222]">onshape</span>
              <span className="text-[9px] font-bold tracking-wider text-[#00a651]">LABS</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
