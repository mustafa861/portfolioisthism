from reportlab.lib.pagesizes import letter, A4
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import inch
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, PageBreak
from reportlab.lib.enums import TA_LEFT, TA_CENTER, TA_JUSTIFY
from reportlab.lib.colors import HexColor

# Create PDF
pdf_filename = "portfolioapp/public/Muhammad_Mustafa_CV.pdf"
doc = SimpleDocTemplate(pdf_filename, pagesize=letter,
                        rightMargin=0.75*inch, leftMargin=0.75*inch,
                        topMargin=0.75*inch, bottomMargin=0.75*inch)

# Container for the 'Flowable' objects
elements = []

# Define styles
styles = getSampleStyleSheet()

# Custom styles
title_style = ParagraphStyle(
    'CustomTitle',
    parent=styles['Heading1'],
    fontSize=24,
    textColor=HexColor('#2E3440'),
    spaceAfter=6,
    alignment=TA_CENTER,
    fontName='Helvetica-Bold'
)

subtitle_style = ParagraphStyle(
    'CustomSubtitle',
    parent=styles['Normal'],
    fontSize=11,
    textColor=HexColor('#5E81AC'),
    spaceAfter=20,
    alignment=TA_CENTER,
    fontName='Helvetica-Oblique'
)

heading_style = ParagraphStyle(
    'CustomHeading',
    parent=styles['Heading2'],
    fontSize=14,
    textColor=HexColor('#2E3440'),
    spaceAfter=8,
    spaceBefore=12,
    fontName='Helvetica-Bold',
    borderColor=HexColor('#5E81AC'),
    borderWidth=0,
    borderPadding=0,
)

subheading_style = ParagraphStyle(
    'CustomSubheading',
    parent=styles['Heading3'],
    fontSize=12,
    textColor=HexColor('#2E3440'),
    spaceAfter=4,
    fontName='Helvetica-Bold'
)

body_style = ParagraphStyle(
    'CustomBody',
    parent=styles['Normal'],
    fontSize=10,
    textColor=HexColor('#3B4252'),
    spaceAfter=6,
    alignment=TA_JUSTIFY,
    fontName='Helvetica'
)

contact_style = ParagraphStyle(
    'ContactStyle',
    parent=styles['Normal'],
    fontSize=9,
    textColor=HexColor('#4C566A'),
    spaceAfter=4,
    alignment=TA_CENTER,
    fontName='Helvetica'
)

# Add content
elements.append(Paragraph("Muhammad Mustafa", title_style))
elements.append(Paragraph("Aspiring AI Developer | Agentic AI Specialist | Full-Stack Developer", subtitle_style))

# Contact Information
elements.append(Paragraph("Email: mustafa1212adnan@gmail.com | Phone: +92 331 3241980", contact_style))
elements.append(Paragraph("GitHub: github.com/mustafa861 | LinkedIn: linkedin.com/in/muhammad-mustafa-9a8974394", contact_style))
elements.append(Spacer(1, 0.2*inch))

# Professional Summary
elements.append(Paragraph("Professional Summary", heading_style))
elements.append(Paragraph(
    "Aspiring AI developer and Agentic AI specialist with a deep passion for building autonomous AI systems that can reason, plan, make decisions, and take actions with minimal human supervision. Specialized in Python, OpenAI Agents SDK, MCP, and spec-driven development to create production-ready AI solutions that solve meaningful, real-world problems. Full-stack developer with expertise in building user interfaces and robust web applications.",
    body_style
))
elements.append(Spacer(1, 0.15*inch))

# Education
elements.append(Paragraph("Education", heading_style))
elements.append(Paragraph("PIAIC — Presidential Initiative for Artificial Intelligence & Computing", subheading_style))
elements.append(Paragraph(
    "A government-backed initiative in Pakistan aimed at training the next generation of AI, blockchain, cloud computing, and IoT professionals. Actively building practical AI skills through project-based learning.",
    body_style
))
elements.append(Paragraph("HPGS — Happy Palace Group of Schools (Grade 9)", subheading_style))
elements.append(Paragraph(
    "Balancing formal schooling with intensive self-driven learning in AI and technology.",
    body_style
))
elements.append(Spacer(1, 0.15*inch))

# Technical Skills
elements.append(Paragraph("Technical Skills", heading_style))
elements.append(Paragraph("<b>AI & Machine Learning:</b> Python, OpenAI Agents SDK, Model Context Protocol (MCP), Prompt Engineering, LLM Techniques, Agentic AI Systems, Claude Code, Gemini CLI", body_style))
elements.append(Paragraph("<b>Automation & Integration:</b> n8n, Agent Kit, Spec-Driven Development, Spec Kit Plus", body_style))
elements.append(Paragraph("<b>Frontend:</b> React, Next.js, TypeScript, JavaScript, Tailwind CSS", body_style))
elements.append(Paragraph("<b>Backend:</b> Node.js, FastAPI, Python, PostgreSQL, Supabase", body_style))
elements.append(Spacer(1, 0.15*inch))

# Projects
elements.append(Paragraph("Key Projects", heading_style))

elements.append(Paragraph("DebateME", subheading_style))
elements.append(Paragraph("<b>Technologies:</b> Next.js, Python, FastAPI", body_style))
elements.append(Paragraph(
    "AI-powered debate platform for practicing argumentation skills against an intelligent opponent with real-time fallacy detection and scoring.",
    body_style
))

elements.append(Paragraph("BizzFlow AI", subheading_style))
elements.append(Paragraph("<b>Technologies:</b> TypeScript, Python", body_style))
elements.append(Paragraph(
    "A full-stack AI-powered business automation platform built with TypeScript frontend and Python backend.",
    body_style
))

elements.append(Paragraph("Restaurant Management System", subheading_style))
elements.append(Paragraph("<b>Technologies:</b> TypeScript, Python", body_style))
elements.append(Paragraph(
    "A full-stack restaurant management system with Python backend and TypeScript frontend.",
    body_style
))
elements.append(Spacer(1, 0.15*inch))

# Hackathons
elements.append(Paragraph("Hackathon Participation", heading_style))

elements.append(Paragraph("Hackathon 0 — Personal AI Employee", subheading_style))
elements.append(Paragraph(
    "<b>Technologies:</b> Python, Claude Code. Building Autonomous FTEs with Gmail/WhatsApp/filesystem watchers, orchestrator, and Claude Code integration.",
    body_style
))

elements.append(Paragraph("Hackathon I — Physical AI & Humanoid Robotics", subheading_style))
elements.append(Paragraph(
    "<b>Technologies:</b> Python, TypeScript, FastAPI. Intelligent textbook platform with Docusaurus frontend, FastAPI backend, and AI agent skills for quizzes, Urdu translation, and personalization.",
    body_style
))

elements.append(Paragraph("Hackathon II — Spec-Driven Full-Stack App", subheading_style))
elements.append(Paragraph(
    "<b>Technologies:</b> JavaScript, Node.js. Full-stack application built with spec-driven development methodology.",
    body_style
))

elements.append(Paragraph("Hackathon III — Reusable Intelligence & Cloud-Native", subheading_style))
elements.append(Paragraph(
    "<b>Technologies:</b> TypeScript, Python. Cloud-native platform with learnflow app and skills library for reusable AI intelligence components.",
    body_style
))

elements.append(Paragraph("Hackathon IV — Course Companion FTE", subheading_style))
elements.append(Paragraph(
    "<b>Technologies:</b> Python, TypeScript, Next.js. AI-powered educational tutor with Zero-Backend-LLM architecture featuring content delivery, quizzes, and progress tracking.",
    body_style
))

# Build PDF
doc.build(elements)
print(f"CV PDF created successfully: {pdf_filename}")
