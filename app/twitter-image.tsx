import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'RapidRescue - Real-Time Emergency Response Platform';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0F172A',
          backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(220, 38, 38, 0.15) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(234, 88, 12, 0.15) 0%, transparent 50%)',
        }}
      >
        {/* Logo/Icon */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 40,
          }}
        >
          <div
            style={{
              width: 120,
              height: 120,
              background: 'linear-gradient(135deg, #DC2626 0%, #EA580C 100%)',
              borderRadius: 24,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 72,
              boxShadow: '0 20px 60px rgba(220, 38, 38, 0.4)',
            }}
          >
            🚨
          </div>
        </div>

        {/* Title */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          <h1
            style={{
              fontSize: 72,
              fontWeight: 900,
              background: 'linear-gradient(90deg, #FFFFFF 0%, #F87171 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              margin: 0,
              padding: 0,
              lineHeight: 1.2,
            }}
          >
            RapidRescue
          </h1>
          
          <p
            style={{
              fontSize: 32,
              color: '#94A3B8',
              margin: '20px 0 0 0',
              padding: 0,
              maxWidth: 900,
              lineHeight: 1.4,
            }}
          >
            Connect with nearby volunteers instantly
          </p>

          {/* Features */}
          <div
            style={{
              display: 'flex',
              gap: 40,
              marginTop: 50,
              alignItems: 'center',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={{ fontSize: 32 }}>⚡</span>
              <span style={{ color: '#CBD5E1', fontSize: 24 }}>Instant</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={{ fontSize: 32 }}>📍</span>
              <span style={{ color: '#CBD5E1', fontSize: 24 }}>Live GPS</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={{ fontSize: 32 }}>🤝</span>
              <span style={{ color: '#CBD5E1', fontSize: 24 }}>Community</span>
            </div>
          </div>
        </div>

        {/* Bottom Badge */}
        <div
          style={{
            position: 'absolute',
            bottom: 40,
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            padding: '16px 32px',
            background: 'rgba(220, 38, 38, 0.1)',
            border: '2px solid rgba(220, 38, 38, 0.3)',
            borderRadius: 999,
          }}
        >
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: 999,
              background: '#22C55E',
              boxShadow: '0 0 20px rgba(34, 197, 94, 0.6)',
            }}
          />
          <span style={{ color: '#F87171', fontSize: 20, fontWeight: 600 }}>
            Emergency Response Network
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
