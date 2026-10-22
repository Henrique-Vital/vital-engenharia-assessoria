import { readFile } from 'node:fs/promises'
import path from 'node:path'
import { ImageResponse } from 'next/og'

export const alt =
  'Vital Engenharia e Assessoria — Projetos, Regularização e Financiamento CAIXA em São José dos Campos'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

async function loadFont(file: string) {
  const data = await readFile(path.join(process.cwd(), 'assets', 'fonts', file))
  return data.buffer.slice(data.byteOffset, data.byteOffset + data.byteLength) as ArrayBuffer
}

const fonts = Promise.all([
  loadFont('inter-400.woff'),
  loadFont('inter-600.woff'),
  loadFont('inter-700.woff'),
]).then(([regular, semibold, bold]) => [
  { name: 'Inter', data: regular, weight: 400 as const, style: 'normal' as const },
  { name: 'Inter', data: semibold, weight: 600 as const, style: 'normal' as const },
  { name: 'Inter', data: bold, weight: 700 as const, style: 'normal' as const },
])

const services = ['Projetos', 'Regularização', 'Habite-se', 'CAIXA PJ']

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          position: 'relative',
          overflow: 'hidden',
          background: '#0A0A0A',
          color: '#FFFFFF',
          fontFamily: 'Inter',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: -320,
            right: -240,
            width: 820,
            height: 820,
            display: 'flex',
            borderRadius: '50%',
            background:
              'linear-gradient(135deg, rgba(239,185,47,0.24) 0%, rgba(239,185,47,0.08) 42%, rgba(239,185,47,0) 70%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -380,
            right: -60,
            width: 640,
            height: 640,
            display: 'flex',
            borderRadius: '50%',
            background:
              'linear-gradient(135deg, rgba(239,185,47,0.12) 0%, rgba(239,185,47,0) 65%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: 30,
            right: -84,
            display: 'flex',
            fontSize: 600,
            fontWeight: 700,
            lineHeight: 1,
            letterSpacing: '-36px',
            color: 'rgba(239,185,47,0.075)',
          }}
        >
          V
        </div>
        <div
          style={{
            position: 'absolute',
            top: 26,
            left: 26,
            right: 26,
            bottom: 26,
            display: 'flex',
            border: '1px solid rgba(239,185,47,0.22)',
            borderRadius: 28,
          }}
        />

        <div
          style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            height: '100%',
            padding: '54px 66px 46px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 62,
                  height: 62,
                  borderRadius: 14,
                  background: '#EFB92F',
                  color: '#0A0A0A',
                  fontSize: 40,
                  fontWeight: 700,
                  lineHeight: 1,
                }}
              >
                V
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                <span style={{ fontSize: 24, fontWeight: 700, letterSpacing: '0.4px' }}>
                  VITAL ENGENHARIA
                </span>
                <span
                  style={{
                    fontSize: 14,
                    fontWeight: 600,
                    color: 'rgba(255,255,255,0.58)',
                    letterSpacing: '5px',
                  }}
                >
                  E ASSESSORIA
                </span>
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                padding: '10px 18px',
                border: '1px solid rgba(239,185,47,0.38)',
                borderRadius: 999,
                color: '#EFB92F',
                fontSize: 14,
                fontWeight: 600,
                letterSpacing: '2.5px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  width: 7,
                  height: 7,
                  borderRadius: 999,
                  background: '#EFB92F',
                }}
              />
              SÃO JOSÉ DOS CAMPOS — SP
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', marginTop: 66 }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 14,
                color: '#EFB92F',
                fontSize: 16,
                fontWeight: 600,
                letterSpacing: '4.5px',
              }}
            >
              <div style={{ display: 'flex', width: 40, height: 2, background: '#EFB92F' }} />
              ENGENHARIA & ASSESSORIA IMOBILIÁRIA
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                marginTop: 22,
                fontSize: 64,
                fontWeight: 700,
                lineHeight: 1.08,
                letterSpacing: '-2.6px',
              }}
            >
              <span>Projetos, regularização</span>
              <div style={{ display: 'flex' }}>
                <span>e financiamento&nbsp;</span>
                <span style={{ color: '#EFB92F' }}>CAIXA</span>
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                marginTop: 22,
                maxWidth: 720,
                fontSize: 22,
                lineHeight: 1.5,
                color: 'rgba(255,255,255,0.68)',
              }}
            >
              Assessoria completa para pessoa física e jurídica em São José dos Campos e região.
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              marginTop: 'auto',
              paddingTop: 22,
              borderTop: '1px solid rgba(255,255,255,0.12)',
            }}
          >
            <div style={{ display: 'flex', gap: 10 }}>
              {services.map((service) => (
                <div
                  key={service}
                  style={{
                    display: 'flex',
                    padding: '9px 16px',
                    border: '1px solid rgba(239,185,47,0.32)',
                    borderRadius: 999,
                    background: 'rgba(239,185,47,0.07)',
                    color: 'rgba(255,255,255,0.82)',
                    fontSize: 15,
                    fontWeight: 600,
                  }}
                >
                  {service}
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 6 }}>
              <span style={{ fontSize: 17, fontWeight: 600, color: 'rgba(255,255,255,0.82)' }}>
                (12) 99608-8779
              </span>
              <span style={{ fontSize: 16, fontWeight: 600, color: '#EFB92F' }}>
                amanda.vital@vitalassessoria.com.br
              </span>
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size, fonts: await fonts },
  )
}
