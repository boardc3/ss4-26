import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

function escapeHtml(value = '') {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}

export async function POST(request) {
  try {
    const form = await request.json()
    const to = process.env.INQUIRY_TO_EMAIL
    const from = process.env.RESEND_FROM_EMAIL || 'SceneSet Website <inquiries@sceneset.ai>'

    if (!process.env.RESEND_API_KEY || !to) {
      return Response.json({ error: 'Email service is not configured.' }, { status: 500 })
    }

    if (!form.name || !form.email) {
      return Response.json({ error: 'Name and email are required.' }, { status: 400 })
    }

    const subject = `New SceneSet inquiry from ${form.name}`
    const text = [
      `Name: ${form.name}`,
      `Company: ${form.company || '-'}`,
      `Email: ${form.email}`,
      `Asset / Goal: ${form.address || '-'}`,
      `Program: ${form.program || '-'}`,
      `Audience: ${form.audience || '-'}`,
      `Timeline: ${form.timeline || '-'}`,
      '',
      'Source / Desired Outcome:',
      form.materials || '-',
    ].join('\n')

    const html = `
      <div style="font-family: Arial, sans-serif; line-height: 1.55; color: #1A1814;">
        <h1 style="font-size: 22px; margin: 0 0 18px;">New SceneSet Inquiry</h1>
        <p><strong>Name:</strong> ${escapeHtml(form.name)}</p>
        <p><strong>Company:</strong> ${escapeHtml(form.company || '-')}</p>
        <p><strong>Email:</strong> ${escapeHtml(form.email)}</p>
        <p><strong>Asset / Goal:</strong> ${escapeHtml(form.address || '-')}</p>
        <p><strong>Program:</strong> ${escapeHtml(form.program || '-')}</p>
        <p><strong>Audience:</strong> ${escapeHtml(form.audience || '-')}</p>
        <p><strong>Timeline:</strong> ${escapeHtml(form.timeline || '-')}</p>
        <hr style="border: none; border-top: 1px solid #E8E1D2; margin: 22px 0;" />
        <p><strong>Source / Desired Outcome:</strong></p>
        <p style="white-space: pre-wrap;">${escapeHtml(form.materials || '-')}</p>
      </div>
    `

    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: form.email,
      subject,
      text,
      html,
    })

    if (error) {
      return Response.json({ error: error.message || 'Email failed to send.' }, { status: 502 })
    }

    return Response.json({ ok: true })
  } catch (error) {
    return Response.json({ error: error.message || 'Invalid request.' }, { status: 500 })
  }
}
