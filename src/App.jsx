import React from 'react';
import ReactFlow, { Background } from 'reactflow';
import 'reactflow/dist/style.css';

const initialNodes = [
  {
    id: '1',
    position: { x: 0, y: 0 },
    data: { label: 'Start: Cybersecurity Basics' },
    style: { backgroundColor: '#007acc', color: 'white', padding: 10, borderRadius: 8, border: '2px solid #004f8b' },
    type: 'input',
  },
  {
    id: '2',
    position: { x: 200, y: 100 },
    data: { label: 'Networking Fundamentals' },
    style: { backgroundColor: '#1e1e2f', color: '#f5f5f5', borderRadius: 6, padding: 8, border: '1px solid #333' },
    type: 'default',
  },
  {
    id: '3',
    position: { x: 400, y: 100 },
    data: { label: 'Linux & CLI Skills' },
    style: { backgroundColor: '#222831', color: '#eeeeee', borderRadius: 6, padding: 8, border: '1px solid #393e46' },
    type: 'default',
  },
  {
    id: '4',
    position: { x: 600, y: 100 },
    data: { label: 'Web Technologies (HTML/CSS/JS)' },
    style: { backgroundColor: '#393e46', color: '#00adb5', borderRadius: 6, padding: 8 },
    type: 'default',
  },
  {
    id: '5',
    position: { x: 800, y: 100 },
    data: { label: 'System Administration' },
    style: { backgroundColor: '#222831', color: '#f5f5f5', border: '1px solid #393e46', borderRadius: 6, padding: 8 },
    type: 'default',
  },
  {
    id: '6',
    position: { x: 300, y: 250 },
    data: { label: 'OWASP Top 10' },
    style: { backgroundColor: '#3f72af', color: '#fff', borderRadius: 6, padding: 8 },
    type: 'default',
  },
  {
    id: '7',
    position: { x: 500, y: 250 },
    data: { label: 'Burp Suite / Recon Tools' },
    style: { backgroundColor: '#112d4e', color: '#fff', borderRadius: 6, padding: 8 },
    type: 'default',
  },
  {
    id: '8',
    position: { x: 700, y: 250 },
    data: { label: 'TryHackMe / HackTheBox Practice' },
    style: { backgroundColor: '#f8b500', color: '#000', borderRadius: 6, padding: 8 },
    type: 'default',
  },
  {
    id: '9',
    position: { x: 400, y: 400 },
    data: { label: 'CTFs & Bug Bounties' },
    style: { backgroundColor: '#6a2c70', color: '#fff', borderRadius: 6, padding: 8 },
    type: 'default',
  },
  {
    id: '10',
    position: { x: 600, y: 400 },
    data: { label: 'Security Certifications (e.g., Sec+)' },
    style: { backgroundColor: '#c06c84', color: '#fff', borderRadius: 6, padding: 8 },
    type: 'default',
  },
  {
    id: '11',
    position: { x: 500, y: 550 },
    data: { label: 'Job-Ready / Portfolio / Resume' },
    style: { backgroundColor: '#355c7d', color: '#fff', borderRadius: 6, padding: 10, border: '2px solid #2a3f54' },
    type: 'output',
  },
];

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2', type: 'smoothstep', style: { stroke: '#007acc', strokeWidth: 2 }, animated: true },
  { id: 'e2-3', source: '2', target: '3', type: 'step', style: { stroke: '#61dafb', strokeWidth: 2 }, animated: true },
  { id: 'e3-4', source: '3', target: '4', type: 'smoothstep', style: { stroke: '#00adb5', strokeWidth: 2 }, animated: true },
  { id: 'e4-5', source: '4', target: '5', type: 'smoothstep', style: { stroke: '#eeeeee', strokeWidth: 2 }, animated: true },
  { id: 'e5-6', source: '5', target: '6', type: 'smoothstep', style: { stroke: '#3f72af', strokeWidth: 2 }, animated: true },
  { id: 'e6-7', source: '6', target: '7', type: 'smoothstep', style: { stroke: '#112d4e', strokeWidth: 2 }, animated: true },
  { id: 'e7-8', source: '7', target: '8', type: 'smoothstep', style: { stroke: '#f8b500', strokeWidth: 2 }, animated: true },
  { id: 'e8-9', source: '8', target: '9', type: 'smoothstep', style: { stroke: '#6a2c70', strokeWidth: 2 }, animated: true },
  { id: 'e8-10', source: '8', target: '10', type: 'smoothstep', style: { stroke: '#c06c84', strokeWidth: 2 }, animated: true },
  { id: 'e9-11', source: '9', target: '11', type: 'smoothstep', style: { stroke: '#355c7d', strokeWidth: 2 }, animated: true },
  { id: 'e10-11', source: '10', target: '11', type: 'smoothstep', style: { stroke: '#355c7d', strokeWidth: 2 }, animated: true },
];

export default function CybersecurityRoadmap() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow nodes={initialNodes} edges={initialEdges} fitView>
        <Background color="#aaa" gap={16} />
      </ReactFlow>
    </div>
  );
}
