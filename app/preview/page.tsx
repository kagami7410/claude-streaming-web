'use client';

import React from 'react';
import Button from '@/components/Button';
import VideoCard from '@/components/ui/VideoCard/VideoCard';
import Modal from '@/components/ui/Modal/Modal';
import styles from './preview.module.css';

export default function PreviewPage() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [isGradientModalOpen, setIsGradientModalOpen] = React.useState(false);
  const [isDarkModalOpen, setIsDarkModalOpen] = React.useState(false);
  const [isAccentModalOpen, setIsAccentModalOpen] = React.useState(false);
  const [isSmallModalOpen, setIsSmallModalOpen] = React.useState(false);
  const [isLargeModalOpen, setIsLargeModalOpen] = React.useState(false);
  const [isFullModalOpen, setIsFullModalOpen] = React.useState(false);
  const [isFooterModalOpen, setIsFooterModalOpen] = React.useState(false);

  const handleLoadingDemo = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Component Preview</h1>
      <p className={styles.subtitle}>
        A comprehensive showcase of UI components with all variants, sizes, and states
      </p>

      {/* VideoCard Component Section */}
      <section className={styles.section}>
        <h2 className={styles.componentTitle}>VideoCard Component</h2>

        {/* Size Variants */}
        <h3 className={styles.sectionTitle}>Size Variants</h3>
        <div className={styles.cardGrid}>
          <div>
            <p className={styles.label}>Small</p>
            <VideoCard
              thumbnail="https://via.placeholder.com/640x360/667eea/ffffff?text=Small+Card"
              title="Introduction to Next.js 14"
              duration="10:24"
              channel="Code Academy"
              channelAvatar="https://via.placeholder.com/50/764ba2/ffffff?text=CA"
              views={125000}
              uploadDate="2024-01-15"
              size="small"
            />
          </div>
          <div>
            <p className={styles.label}>Medium (Default)</p>
            <VideoCard
              thumbnail="https://via.placeholder.com/640x360/f093fb/ffffff?text=Medium+Card"
              title="React Hooks Deep Dive"
              duration="15:32"
              channel="React Masters"
              channelAvatar="https://via.placeholder.com/50/FF6B6B/ffffff?text=RM"
              views={89000}
              uploadDate="2024-01-20"
              size="medium"
            />
          </div>
          <div>
            <p className={styles.label}>Large</p>
            <VideoCard
              thumbnail="https://via.placeholder.com/640x360/4CAF50/ffffff?text=Large+Card"
              title="Beautiful Nature Landscapes in 4K"
              duration="8:15"
              channel="Earth Explorer"
              channelAvatar="https://via.placeholder.com/50/4CAF50/ffffff?text=EE"
              views={234000}
              uploadDate="2024-01-18"
              size="large"
            />
          </div>
        </div>

        {/* Color Variants */}
        <h3 className={styles.sectionTitle}>Color Variants</h3>
        <div className={styles.cardGrid}>
          <div>
            <p className={styles.label}>Primary</p>
            <VideoCard
              thumbnail="https://via.placeholder.com/640x360/667eea/ffffff?text=Primary"
              title="TypeScript Best Practices"
              duration="18:20"
              channel="Code Academy"
              channelAvatar="https://via.placeholder.com/50/764ba2/ffffff?text=CA"
              views={156000}
              uploadDate="2024-01-25"
              variant="primary"
            />
          </div>
          <div>
            <p className={styles.label}>Secondary</p>
            <VideoCard
              thumbnail="https://via.placeholder.com/640x360/f093fb/ffffff?text=Secondary"
              title="Meditation for Beginners"
              duration="20:00"
              channel="Mindful Living"
              channelAvatar="https://via.placeholder.com/50/9C27B0/ffffff?text=ML"
              views={98000}
              uploadDate="2024-01-28"
              variant="secondary"
            />
          </div>
          <div>
            <p className={styles.label}>Accent</p>
            <VideoCard
              thumbnail="https://via.placeholder.com/640x360/FFD54F/ffffff?text=Accent"
              title="Cooking Italian Pasta"
              duration="12:45"
              channel="Chef's Kitchen"
              channelAvatar="https://via.placeholder.com/50/FF8E53/ffffff?text=CK"
              views={67000}
              uploadDate="2024-01-22"
              variant="accent"
            />
          </div>
          <div>
            <p className={styles.label}>Success</p>
            <VideoCard
              thumbnail="https://via.placeholder.com/640x360/4CAF50/ffffff?text=Success"
              title="Travel Guide: Tokyo"
              duration="14:55"
              channel="Globe Trotter"
              channelAvatar="https://via.placeholder.com/50/E91E63/ffffff?text=GT"
              views={187000}
              uploadDate="2024-01-30"
              variant="success"
            />
          </div>
        </div>

        {/* Minimal Card */}
        <h3 className={styles.sectionTitle}>Minimal Card (Title + Thumbnail Only)</h3>
        <div className={styles.cardGrid}>
          <VideoCard
            thumbnail="https://via.placeholder.com/640x360/9C27B0/ffffff?text=Minimal"
            title="Guitar Lesson: Blues Scales"
          />
        </div>

        {/* Interactive Demo */}
        <h3 className={styles.sectionTitle}>Interactive Demo</h3>
        <div className={styles.cardGrid}>
          <VideoCard
            thumbnail="https://via.placeholder.com/640x360/FF5722/ffffff?text=Click+Me"
            title="Interactive Video Card"
            duration="11:30"
            channel="Music Academy"
            channelAvatar="https://via.placeholder.com/50/FF5722/ffffff?text=MA"
            views={72000}
            uploadDate="2024-02-01"
            onClick={() => alert('Video card clicked!')}
          />
        </div>

        {/* Size + Variant Combinations */}
        <h3 className={styles.sectionTitle}>Size + Variant Combinations</h3>
        <div className={styles.cardGrid}>
          <div>
            <p className={styles.label}>Small + Primary</p>
            <VideoCard
              thumbnail="https://via.placeholder.com/640x360/667eea/ffffff?text=S+Primary"
              title="Small Primary Card"
              duration="5:20"
              channel="Channel"
              channelAvatar="https://via.placeholder.com/50"
              views={5000}
              uploadDate="2024-02-05"
              size="small"
              variant="primary"
            />
          </div>
          <div>
            <p className={styles.label}>Medium + Secondary</p>
            <VideoCard
              thumbnail="https://via.placeholder.com/640x360/f093fb/ffffff?text=M+Secondary"
              title="Medium Secondary Card"
              duration="10:00"
              channel="Channel"
              channelAvatar="https://via.placeholder.com/50"
              views={15000}
              uploadDate="2024-02-06"
              size="medium"
              variant="secondary"
            />
          </div>
          <div>
            <p className={styles.label}>Large + Accent</p>
            <VideoCard
              thumbnail="https://via.placeholder.com/640x360/FFD54F/ffffff?text=L+Accent"
              title="Large Accent Card with Longer Title to Test Text Overflow"
              duration="25:45"
              channel="Channel"
              channelAvatar="https://via.placeholder.com/50"
              views={1500000}
              uploadDate="2024-02-07"
              size="large"
              variant="accent"
            />
          </div>
        </div>
      </section>

      {/* Button Component Section */}
      <section className={styles.section}>
        <h2 className={styles.componentTitle}>Button Component</h2>

        {/* Variants Section */}
        <h3 className={styles.sectionTitle}>Variants</h3>
        <div className={styles.buttonGroup}>
          <Button variant="primary">Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="outline">Outline Button</Button>
          <Button variant="ghost">Ghost Button</Button>
        </div>

        {/* Sizes Section */}
        <h3 className={styles.sectionTitle}>Sizes</h3>
        <div className={styles.buttonGroup}>
          <Button size="sm">Small Button</Button>
          <Button size="md">Medium Button</Button>
          <Button size="lg">Large Button</Button>
        </div>

        {/* Sizes with Different Variants */}
        <h3 className={styles.sectionTitle}>Sizes + Variants</h3>
        <div className={styles.grid}>
          <div className={styles.gridItem}>
            <p className={styles.label}>Primary</p>
            <div className={styles.buttonGroup}>
              <Button variant="primary" size="sm">Small</Button>
              <Button variant="primary" size="md">Medium</Button>
              <Button variant="primary" size="lg">Large</Button>
            </div>
          </div>
          <div className={styles.gridItem}>
            <p className={styles.label}>Secondary</p>
            <div className={styles.buttonGroup}>
              <Button variant="secondary" size="sm">Small</Button>
              <Button variant="secondary" size="md">Medium</Button>
              <Button variant="secondary" size="lg">Large</Button>
            </div>
          </div>
          <div className={styles.gridItem}>
            <p className={styles.label}>Outline</p>
            <div className={styles.buttonGroup}>
              <Button variant="outline" size="sm">Small</Button>
              <Button variant="outline" size="md">Medium</Button>
              <Button variant="outline" size="lg">Large</Button>
            </div>
          </div>
          <div className={styles.gridItem}>
            <p className={styles.label}>Ghost</p>
            <div className={styles.buttonGroup}>
              <Button variant="ghost" size="sm">Small</Button>
              <Button variant="ghost" size="md">Medium</Button>
              <Button variant="ghost" size="lg">Large</Button>
            </div>
          </div>
        </div>

        {/* With Icons Section */}
        <h3 className={styles.sectionTitle}>With Icons</h3>
        <div className={styles.buttonGroup}>
          <Button leftIcon={<span>←</span>}>Back</Button>
          <Button rightIcon={<span>→</span>}>Next</Button>
          <Button leftIcon={<span>+</span>} variant="secondary">Add Item</Button>
          <Button rightIcon={<span>↗</span>} variant="outline">External Link</Button>
          <Button
            leftIcon={<span>✓</span>}
            rightIcon={<span>→</span>}
            variant="primary"
          >
            Save & Continue
          </Button>
        </div>

        {/* Loading State Section */}
        <h3 className={styles.sectionTitle}>Loading State</h3>
        <div className={styles.buttonGroup}>
          <Button variant="primary" isLoading>Loading...</Button>
          <Button variant="secondary" isLoading>Processing</Button>
          <Button variant="outline" isLoading>Uploading</Button>
          <Button variant="ghost" isLoading>Saving</Button>
          <Button
            variant="primary"
            isLoading={isLoading}
            onClick={handleLoadingDemo}
          >
            {isLoading ? 'Loading...' : 'Click to Load'}
          </Button>
        </div>

        {/* Disabled State Section */}
        <h3 className={styles.sectionTitle}>Disabled State</h3>
        <div className={styles.buttonGroup}>
          <Button variant="primary" disabled>Disabled Primary</Button>
          <Button variant="secondary" disabled>Disabled Secondary</Button>
          <Button variant="outline" disabled>Disabled Outline</Button>
          <Button variant="ghost" disabled>Disabled Ghost</Button>
        </div>

        {/* Full Width Section */}
        <h3 className={styles.sectionTitle}>Full Width</h3>
        <div className={styles.fullWidthDemo}>
          <Button variant="primary" fullWidth>Full Width Primary</Button>
          <Button variant="secondary" fullWidth>Full Width Secondary</Button>
          <Button variant="outline" fullWidth>Full Width Outline</Button>
        </div>

        {/* Interactive Demo Section */}
        <h3 className={styles.sectionTitle}>Interactive Demo</h3>
        <div className={styles.buttonGroup}>
          <Button
            variant="primary"
            onClick={() => alert('Primary button clicked!')}
          >
            Click Me
          </Button>
          <Button
            variant="secondary"
            onClick={() => console.log('Secondary button clicked')}
          >
            Log to Console
          </Button>
          <Button
            variant="outline"
            leftIcon={<span>🎉</span>}
            onClick={() => alert('Celebration!')}
          >
            Celebrate
          </Button>
        </div>

        {/* Combined States Section */}
        <h3 className={styles.sectionTitle}>Combined Styles</h3>
        <div className={styles.buttonGroup}>
          <Button
            variant="primary"
            size="lg"
            leftIcon={<span>▶</span>}
          >
            Play Video
          </Button>
          <Button
            variant="secondary"
            size="lg"
            leftIcon={<span>⬇</span>}
          >
            Download
          </Button>
          <Button
            variant="outline"
            size="lg"
            rightIcon={<span>⚙</span>}
          >
            Settings
          </Button>
        </div>

        {/* Button Group Example */}
        <h3 className={styles.sectionTitle}>Button Groups</h3>
        <div className={styles.buttonGroupExample}>
          <Button variant="outline" size="sm">Cancel</Button>
          <Button variant="secondary" size="sm">Save as Draft</Button>
          <Button variant="primary" size="sm">Publish</Button>
        </div>
      </section>

      {/* Modal Component Section */}
      <section className={styles.section}>
        <h2 className={styles.componentTitle}>Modal Component</h2>

        {/* Variant Section */}
        <h3 className={styles.sectionTitle}>Variants</h3>
        <div className={styles.buttonGroup}>
          <Button variant="primary" onClick={() => setIsModalOpen(true)}>
            Default Modal
          </Button>
          <Button variant="secondary" onClick={() => setIsGradientModalOpen(true)}>
            Gradient Modal
          </Button>
          <Button variant="outline" onClick={() => setIsDarkModalOpen(true)}>
            Dark Modal
          </Button>
          <Button variant="ghost" onClick={() => setIsAccentModalOpen(true)}>
            Accent Modal
          </Button>
        </div>

        {/* Size Section */}
        <h3 className={styles.sectionTitle}>Sizes</h3>
        <div className={styles.buttonGroup}>
          <Button onClick={() => setIsSmallModalOpen(true)}>Small Modal</Button>
          <Button onClick={() => setIsModalOpen(true)}>Medium Modal (Default)</Button>
          <Button onClick={() => setIsLargeModalOpen(true)}>Large Modal</Button>
          <Button onClick={() => setIsFullModalOpen(true)}>Full Modal</Button>
        </div>

        {/* With Footer */}
        <h3 className={styles.sectionTitle}>With Footer</h3>
        <div className={styles.buttonGroup}>
          <Button variant="primary" onClick={() => setIsFooterModalOpen(true)}>
            Modal with Footer
          </Button>
        </div>
      </section>

      {/* Modal Instances */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Default Modal"
        size="medium"
        variant="default"
      >
        <p>This is a default modal with medium size. It features a clean, modern design that matches the StreamHub theme.</p>
        <p>You can close this modal by:</p>
        <ul>
          <li>Clicking the close button</li>
          <li>Pressing the Escape key</li>
          <li>Clicking outside the modal</li>
        </ul>
      </Modal>

      <Modal
        isOpen={isGradientModalOpen}
        onClose={() => setIsGradientModalOpen(false)}
        title="Gradient Modal"
        variant="gradient"
      >
        <p>This modal features a beautiful gradient background using StreamHub&apos;s primary colors.</p>
        <p>The gradient creates a vibrant, eye-catching effect that&apos;s perfect for important announcements or featured content.</p>
      </Modal>

      <Modal
        isOpen={isDarkModalOpen}
        onClose={() => setIsDarkModalOpen(false)}
        title="Dark Modal"
        variant="dark"
      >
        <p>This is a dark variant modal with a deep, rich background.</p>
        <p>It&apos;s ideal for video players, image galleries, or any content that benefits from a darker backdrop.</p>
      </Modal>

      <Modal
        isOpen={isAccentModalOpen}
        onClose={() => setIsAccentModalOpen(false)}
        title="Accent Modal"
        variant="accent"
      >
        <p>This accent modal uses warm colors from the StreamHub palette.</p>
        <p>Perfect for alerts, notifications, or calls-to-action that need extra attention.</p>
      </Modal>

      <Modal
        isOpen={isSmallModalOpen}
        onClose={() => setIsSmallModalOpen(false)}
        title="Small Modal"
        size="small"
      >
        <p>This is a small modal, perfect for quick confirmations or simple messages.</p>
      </Modal>

      <Modal
        isOpen={isLargeModalOpen}
        onClose={() => setIsLargeModalOpen(false)}
        title="Large Modal"
        size="large"
      >
        <p>This is a large modal with more space for content.</p>
        <p>Large modals are great for:</p>
        <ul>
          <li>Forms with multiple fields</li>
          <li>Detailed information displays</li>
          <li>Content that requires more reading space</li>
          <li>Multi-step wizards</li>
        </ul>
        <p>The scrollable content area ensures all information is accessible even on smaller screens.</p>
      </Modal>

      <Modal
        isOpen={isFullModalOpen}
        onClose={() => setIsFullModalOpen(false)}
        title="Full Screen Modal"
        size="full"
      >
        <p>This is a full-screen modal that takes up most of the viewport.</p>
        <p>Full-screen modals are perfect for:</p>
        <ul>
          <li>Video players</li>
          <li>Image galleries</li>
          <li>Complex forms or wizards</li>
          <li>Immersive experiences</li>
        </ul>
        <p>It provides maximum space while still maintaining the modal context.</p>
      </Modal>

      <Modal
        isOpen={isFooterModalOpen}
        onClose={() => setIsFooterModalOpen(false)}
        title="Modal with Footer Actions"
        footer={
          <div className={styles.buttonGroup}>
            <Button variant="outline" onClick={() => setIsFooterModalOpen(false)}>
              Cancel
            </Button>
            <Button variant="secondary" onClick={() => alert('Draft saved!')}>
              Save as Draft
            </Button>
            <Button variant="primary" onClick={() => {
              alert('Published!');
              setIsFooterModalOpen(false);
            }}>
              Publish
            </Button>
          </div>
        }
      >
        <p>This modal includes a footer with action buttons.</p>
        <p>Footer buttons are commonly used for:</p>
        <ul>
          <li>Confirm/Cancel actions</li>
          <li>Form submissions</li>
          <li>Multi-step navigation</li>
          <li>Save/Delete operations</li>
        </ul>
        <p>The footer provides a clear, consistent location for primary actions.</p>
      </Modal>
    </div>
  );
}
