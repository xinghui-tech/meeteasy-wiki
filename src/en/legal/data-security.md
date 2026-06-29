# Data Security

**Effective Date:** 2026-07-01  
**Last Updated:** 2026-06-20  
**Version:** 0.1 (Draft)

## 1. Overview

**Xinghui Shengshi (Beijing) Technology Co., Ltd.** ("Company") is committed to protecting the security of data processed through the **MeetEasy (星汇小蜜书) Platform** ("Platform"). This document summarizes our security practices and compliance commitments.

## 2. Security Governance

- Designated security responsibilities within the engineering organization
- Security considerations integrated into product development lifecycle
- Regular review of security policies and incident response procedures
- Employee security awareness and access management training

## 3. Technical Measures

### 3.1 Transmission Security

- All Platform traffic encrypted via **HTTPS/TLS** (minimum TLS 1.2)
- API authentication via JWT tokens with configurable expiration
- Login tickets for WeChat SSO are single-use with short TTL
- WebSocket (Socket.IO) connections encrypted via WSS

### 3.2 Storage Protection

- Database access restricted to application services only
- Sensitive configuration (API keys, secrets) stored encrypted
- Passwords hashed with industry-standard algorithms (never stored in plaintext)
- File uploads scanned and stored in isolated storage paths

### 3.3 Backup & Recovery

- Regular automated database backups
- Backup encryption and access controls
- Documented recovery procedures with defined RTO/RPO targets **2026-07-01**
- Periodic recovery testing

## 4. Access Control

### 4.1 Role-Based Access Control (RBAC)

| Role | Scope |
|------|-------|
| Super admin | Cross-tenant platform operations |
| Tenant admin | Single tenant management |
| Organizer | Conference-scoped management |
| Attendee | Personal data and registered events |

### 4.2 Multi-Tenant Isolation

- All data queries scoped by `tenant_id` from trusted authentication context
- Cross-tenant access requires explicit super-admin authorization
- Tenant data logically separated at the application layer
- No tenant can access another tenant's data through normal API operations

### 4.3 Least Privilege

- Production access limited to authorized personnel
- Service accounts use minimal required permissions
- Administrative actions logged and auditable

## 5. Logging & Monitoring

- Application logs include tenant and user context (without sensitive data)
- Authentication events logged (login, logout, failed attempts)
- Anomaly detection for unusual access patterns
- Log retention per defined policy **2026-07-01**
- Sensitive data (tokens, passwords, PII) masked in logs

## 6. Vulnerability Management

- Dependency vulnerability scanning in CI/CD pipeline
- Security patches applied on a defined schedule
- Responsible disclosure process for reported vulnerabilities
- Security report channel: 2026-07-01

## 7. Incident Response

Our incident response process follows four phases:

1. **Detection** — Monitoring alerts, user reports, automated scanning
2. **Containment** — Isolate affected systems, revoke compromised credentials
3. **Notification** — Notify affected users and authorities as required by law
4. **Recovery & Review** — Restore services, conduct post-incident review, implement improvements

Incident notification timeline: **2026-07-01** per applicable regulatory requirements.

## 8. Compliance Commitments

| Regulation | Status |
|------------|--------|
| Personal Information Protection Law (PIPL) | Committed |
| Cybersecurity Law of the PRC | Committed |
| Data Security Law of the PRC | Committed |
| Multi-Level Protection Scheme (MLPS) | [TBD — certification status] |

## 9. Sub-Processor Management

Third-party services that process Platform data (cloud hosting, AI providers, WeChat) are:

- Evaluated for security practices before integration
- Bound by data processing agreements
- Limited to the minimum data necessary for their function
- Reviewed periodically for continued compliance

## 10. Your Role in Security

You can help protect your data by:

- Using strong, unique passwords
- Not sharing login credentials
- Logging out on shared devices
- Reporting suspicious activity to 2026-07-01
- Keeping your browser and devices updated

## 11. Contact

For security inquiries or to report a vulnerability:

- Security team: 2026-07-01
- Address: 2026-07-01

We appreciate responsible disclosure and will acknowledge reports within 2026-07-01 business days.
