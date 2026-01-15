import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const { name, email, message } = await request.json()

    // Validate the input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      )
    }

    // Get Resend API key
    const RESEND_API_KEY = process.env.RESEND_API_KEY
    
    if (!RESEND_API_KEY) {
      console.error('Resend API key is missing')
      return NextResponse.json(
        { error: 'Email service is not configured properly' },
        { status: 500 }
      )
    }

    // Send email using Resend
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Portfolio Contact <onboarding@resend.dev>',
        to: ['mr.bilalsaleem2003@gmail.com'],
        reply_to: email,
        subject: `New Contact Form Submission: ${name}`,
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="utf-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>New Contact Form Submission</title>
              <style>
                * {
                  margin: 0;
                  padding: 0;
                  box-sizing: border-box;
                }
                
                body {
                  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
                  line-height: 1.6;
                  color: #374151;
                  background-color: #f9fafb;
                  padding: 20px;
                }
                
                .email-container {
                  max-width: 600px;
                  margin: 0 auto;
                  background-color: #ffffff;
                  border-radius: 12px;
                  overflow: hidden;
                  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
                }
                
                .email-header {
                  background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
                  color: white;
                  padding: 32px;
                  text-align: center;
                }
                
                .email-header h1 {
                  font-size: 24px;
                  font-weight: 700;
                  margin-bottom: 8px;
                }
                
                .email-header p {
                  font-size: 14px;
                  opacity: 0.9;
                }
                
                .email-content {
                  padding: 32px;
                }
                
                .info-section {
                  margin-bottom: 24px;
                }
                
                .info-section:last-child {
                  margin-bottom: 0;
                }
                
                .info-label {
                  font-size: 12px;
                  font-weight: 600;
                  color: #3b82f6;
                  text-transform: uppercase;
                  letter-spacing: 0.05em;
                  margin-bottom: 8px;
                  display: flex;
                  align-items: center;
                  gap: 8px;
                }
                
                .info-value {
                  font-size: 16px;
                  color: #111827;
                  padding-left: 24px;
                }
                
                .message-box {
                  background-color: #f8fafc;
                  border: 1px solid #e2e8f0;
                  border-radius: 8px;
                  padding: 20px;
                  margin-top: 12px;
                  border-left: 4px solid #3b82f6;
                  white-space: pre-wrap;
                  font-family: 'SF Mono', Monaco, 'Courier New', monospace;
                  font-size: 14px;
                  line-height: 1.7;
                  color: #334155;
                }
                
                .contact-info {
                  display: flex;
                  align-items: center;
                  gap: 12px;
                  margin-top: 4px;
                }
                
                .contact-info a {
                  color: #3b82f6;
                  text-decoration: none;
                  font-weight: 500;
                }
                
                .contact-info a:hover {
                  text-decoration: underline;
                }
                
                .email-footer {
                  margin-top: 32px;
                  padding-top: 24px;
                  border-top: 1px solid #e5e7eb;
                  text-align: center;
                  font-size: 12px;
                  color: #6b7280;
                }
                
                .email-footer p {
                  margin-bottom: 4px;
                }
                
                .timestamp {
                  color: #9ca3af;
                  font-size: 11px;
                }
                
                /* Icons */
                .icon {
                  display: inline-block;
                  width: 16px;
                  height: 16px;
                  vertical-align: middle;
                }
              </style>
            </head>
            <body>
              <div class="email-container">
                <div class="email-header">
                  <h1>📬 New Contact Form Submission</h1>
                  <p>From your portfolio website</p>
                </div>
                
                <div class="email-content">
                  <div class="info-section">
                    <div class="info-label">
                      <span>👤 Sender Information</span>
                    </div>
                    <div class="info-value">
                      <strong>${name}</strong>
                      <div class="contact-info">
                        📧 <a href="mailto:${email}">${email}</a>
                      </div>
                    </div>
                  </div>
                  
                  <div class="info-section">
                    <div class="info-label">
                      <span>💬 Message</span>
                    </div>
                    <div class="message-box">
                      ${message.replace(/\n/g, '<br>')}
                    </div>
                  </div>
                </div>
                
                <div class="email-footer">
                  <p>This message was sent via your portfolio contact form</p>
                  <p class="timestamp">Received: ${new Date().toLocaleString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                    timeZoneName: 'short'
                  })}</p>
                  <p style="margin-top: 12px; color: #10b981;">
                    ✅ Successfully delivered via Resend
                  </p>
                </div>
              </div>
            </body>
          </html>
        `,
        text: `
          NEW CONTACT FORM SUBMISSION
          ============================
          
          From: ${name}
          Email: ${email}
          
          Message:
          ${message}
          
          ============================
          Sent via portfolio contact form
          Time: ${new Date().toLocaleString()}
        `,
        tags: [
          { name: 'category', value: 'portfolio-contact' },
          { name: 'source', value: 'website-form' }
        ]
      }),
    })

    if (!response.ok) {
      const errorData = await response.json()
      console.error('Resend API Error:', errorData)
      
      // Handle specific Resend errors
      if (response.status === 401) {
        return NextResponse.json(
          { error: 'Email service authentication failed. Please contact the website owner.' },
          { status: 500 }
        )
      }
      
      if (response.status === 429) {
        return NextResponse.json(
          { error: 'Too many requests. Please try again in a few minutes.' },
          { status: 429 }
        )
      }
      
      return NextResponse.json(
        { error: 'Failed to send email. Please try again.' },
        { status: response.status }
      )
    }

    const data = await response.json()
    console.log('Email sent successfully via Resend:', data.id)

    return NextResponse.json(
      { 
        message: 'Message sent successfully! I will get back to you within 24 hours.',
        success: true,
        emailId: data.id
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error in contact form:', error)
    
    return NextResponse.json(
      { 
        error: 'Failed to process your request. Please try again later or email me directly.',
        fallbackEmail: 'mailto:mr.bilalsaleem2003@gmail.com'
      },
      { status: 500 }
    )
  }
}