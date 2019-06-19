<?php

use yii\db\Migration;

/**
 * Class m190613_185830_add_name_and_custom_states_fields_to_task_table
 */
class m190613_185830_add_name_and_custom_states_fields_to_task_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
		$this->addColumn('{{%task}}', 'name', $this->string()->notNull()->after('id'));
		$this->addColumn('{{%task}}', 'custom_states', $this->string()->after('state'));
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->dropColumn('{{%task}}', 'name');
        $this->dropColumn('{{%task}}', 'custom_states');
    }
}
